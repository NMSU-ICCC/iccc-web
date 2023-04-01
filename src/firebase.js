import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyADxwQOs4o9lXXU7pzk2_iwKPc3xPt7Ywc",
    authDomain: "iccc-nmsu.firebaseapp.com",
    projectId: "iccc-nmsu",
    storageBucket: "iccc-nmsu.appspot.com",
    messagingSenderId: "25909065230",
    appId: "1:25909065230:web:a688c9cfe5f5ac204c6e5f"
};

firebase.initializeApp(firebaseConfig);
const ref =firebase.firestore()






export const getUsers = () => {
    const users = [];
    return new Promise((resolve, reject) => {           
        ref.collection("users").onSnapshot((querySnapshot) => {            
            querySnapshot.forEach((doc) => {
                users.push(doc.data());
            })
            setTimeout(function() {
                resolve(users)
            }, 400);
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

export const addUser = (name, email, userName, password,) =>{    
    return new Promise((resolve, reject) => { 
        userExists(userName, email)
        .then(answer =>{
            if (answer){
                return resolve(false);
            }
            setDoc(doc(ref, "users", userName), {
                name: name,
                email: email,
                userName: userName,
                password: password
            });
            return resolve(true);
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
                    if(users[index].password.localeCompare(password) == 0){
                        return resolve( true );
                    }
                }
            }
            return resolve( false );
        })
    })
}


export default firebase;