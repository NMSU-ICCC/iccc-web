import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { doc, setDoc} from "firebase/firestore";
//import {ref, uploadBytes} from "firebase/storage";
import { getStorage, ref, uploadBytes, listAll, getDownloadURL, getMetadata, deleteObject  } from "firebase/storage";
import bcrypt from 'bcryptjs'


const firebaseConfig = {
    apiKey: "AIzaSyADxwQOs4o9lXXU7pzk2_iwKPc3xPt7Ywc",
    authDomain: "iccc-nmsu.firebaseapp.com",
    projectId: "iccc-nmsu",
    storageBucket: "iccc-nmsu.appspot.com",
    messagingSenderId: "25909065230",
    appId: "1:25909065230:web:a688c9cfe5f5ac204c6e5f"
};

firebase.initializeApp(firebaseConfig);
const db =firebase.firestore()

export const getUsers = () => {
    const users = [];
    return new Promise((resolve, reject) => {           
        db.collection("users").onSnapshot((querySnapshot) => {            
            querySnapshot.forEach((doc) => {
                users.push(doc.data());
            })
            setTimeout(function() {
                resolve(users)
            }, 400);
        })
    })
}

export const getResourcesLinks = () => {
    const links = [];
    return new Promise((resolve, reject) => {           
        db.collection("resourcesLinks").onSnapshot((querySnapshot) => {            
            querySnapshot.forEach((doc) => {
                links.push(doc.data());
            })
            setTimeout(function() {
                resolve(links)
            }, 400);
        })
    })
}

export const getResources = () => {
    const resources = [];
    return new Promise((resolve, reject) => {           
        db.collection("resources").onSnapshot((querySnapshot) => {            
            querySnapshot.forEach((doc) => {
                resources.push(doc.data());
            })
            setTimeout(function() {
                return resolve(resources)
            }, 700);
        })
    })
}

export const userExists = (userName, email) => {
    return new Promise((resolve, reject) => {  
        getUsers()
        .then(users =>{
            //THERE CAN'T BE MORE THAN 20 USERS. THIS TO AVOID ATTACKS
            if(users.length >= 20){
                return resolve(true);
            }
            for (let index = 0; index < users.length; index++) {
                if(users[index].userName.localeCompare(userName) == 0){
                    return resolve( true );
                }
                if(users[index].email.localeCompare(email) == 0){
                    return resolve( true );
                }
            }
            return resolve( false );
        })
    })
}

export const getUser = (email) => {
    return new Promise((resolve, reject) => {  
        getUsers()
        .then(users =>{
            //THERE CAN'T BE MORE THAN 20 USERS. THIS TO AVOID ATTACKS
            if(users.length >= 20){
                return resolve(true);
            }
            for (let index = 0; index < users.length; index++) {
                if(users[index].email.localeCompare(email) == 0){
                    return resolve( users[index] );
                }
            }
            return resolve( false );
        })
    })
}

 
export const resourceExists = (filename) => {
    return new Promise((resolve, reject) => {  
        getResources()
        .then(resources =>{
            for (let index = 0; index < resources.length; index++) {
                if(resources[index].filename.localeCompare(filename) == 0){
                    return resolve( true );
                }
            }
            return resolve( false );
        })
    })
}


function hashPassword(password){      
    return new Promise((resolve, reject) => { 
        bcrypt.genSalt().then(salt => {
            bcrypt.hash(password, salt).then(hash =>{
                return resolve(hash);
            })
        })
    })  
}

function definePosition(code){
    if(code.localeCompare("ICCC+Manager") == 0){
        return "manager";
    }
    else{
        return "user"
    }
}

function createPasswordRecoveryCode(){
    /*
        This 5 characters long code is used to reset the password as a confirmation method.
        Everytime the password is updated, the code is reseted.
    */
    let CODE_LENGTH = 5
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < CODE_LENGTH) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

export const addUser = (name, email, userName, password, code) =>{ 
    let position = definePosition(code);
    let hashedPassword = ""
    hashPassword(password).then(ans => {hashedPassword = ans});
    let recoveryCode = createPasswordRecoveryCode();


    return new Promise((resolve, reject) => { 
        userExists(userName, email)
        .then(answer =>{
            if (answer){
                return resolve(false);
            }
            setDoc(doc(db, "users", userName), {
                name: name,
                email: email,
                userName: userName,
                password: hashedPassword,
                position: position,
                passwordRecoveryCode: recoveryCode
            });
            return resolve(true);
        })
    })
}


export const updateUser = (email, newPassword, code) =>{ 
    

    // let position = definePosition(code);
    // let hashedPassword = ""
    // hashPassword(password).then(ans => {hashedPassword = ans});
    // let recoveryCode = createPasswordRecoveryCode();
    // console.log(recoveryCode)


    return new Promise((resolve, reject) => { 
        getUser(email)
        .then((user) => {
            //valid user means correct email
            if(!user){
                return resolve(false);
            }
            
            //check that the code is valid
            if(user["passwordRecoveryCode"].localeCompare(code) != 0){
                return resolve(false);
            }
            
            //if the code is valid
            user["passwordRecoveryCode"] = createPasswordRecoveryCode();
            //set new password and recovery code
            let hashedPassword = ""
            hashPassword(newPassword).then(ans => {
                hashedPassword = ans;                
                let recoveryCode = createPasswordRecoveryCode();

                setDoc(doc(db, "users", user["userName"]), {
                    name: user["name"],
                    email: user["email"],
                    userName: user["userName"],
                    password: hashedPassword,
                    position: user["position"],
                    passwordRecoveryCode: recoveryCode
                });
                return resolve(true);   
            });         
        })

    })
}

export const login = (nameEmail, password) => {
    return new Promise((resolve, reject) => {  
        getUsers()
        .then(users =>{
            if(users.length == 0){
                return resolve(false);
            }
            for (let index = 0; index < users.length; index++) {
                if(users[index].userName.localeCompare(nameEmail) == 0  ||  users[index].email.localeCompare(nameEmail) == 0){                    
                    bcrypt.compare(password, users[index].password).then(result => {
                        //if valid password
                        if(result){
                            //user or manager
                            return resolve(users[index].position);
                        }
                        //invalid password
                        return resolve( false );
                    });
                }
            }
        })
    })
}


export const uploadResourceFile = (filename, file, type) =>{
    return new Promise((resolve, reject) => {         
        resourceExists(filename)
        .then(answer =>{
            if (answer){
                return resolve(false);
            }
            const storage = getStorage();
            const imageRef = ref(storage, filename);
            const metadata = {
                title: 'filename',
                type: type
              };              

            uploadBytes(imageRef, file, metadata).then((snapshot) => {
                return resolve(true)
            });
        })
    })
}

export const uploadResourceLink = (link, title) =>{ 
    return new Promise((resolve, reject) => { 
        setDoc(doc(db, "resourcesLinks", title), {
            name: title,
            link, link
        });
        return resolve(true);
    })
}


export const getAllResources = () =>{
    const storage = getStorage();
    const resourcesListRef = ref(storage, "")
    return new Promise((resolve, reject) => {         
        listAll(resourcesListRef).then((response) => {
            let imageList = []
            for (let index = 0; index < response.items.length; index++) {
                getDownloadURL(response.items[index]).then(url=>{
                    let dict = {
                        url: url
                    }
                    return dict
                }).then((ans) => {
                    getMetadata(response.items[index]).then((metadata) => {
                        ans["name"] = metadata["name"];
                        ans["type"] = metadata["contentType"];
                        imageList.push(ans);
                    })
                    .then(()=>{
                        return resolve(imageList);
                    })
                })
            }
        })
    })
}



export const deleteResource = (filename) =>{
    return new Promise((resolve, reject) => {         
        resourceExists(filename)
        .then(answer =>{
            if (answer){
                return resolve(false);
            }
            const storage = getStorage();
            const desertRef = ref(storage, filename);


            deleteObject(desertRef).then(() => {
                console.log("deleted!!")
                return resolve(true)
            }).catch((error) => {
                console.log("not able to delete", error)
            });
        })
    })
}


export default firebase;









 





