import emailjs from 'emailjs-com';
import {updateUser} from "../../firebase";
import { GeneralButton } from '../GeneralButton';
import ButtonSolid from '../ButtonSolid';
import { useNavigate  } from "react-router-dom";

export default function RequestRestorePassword(){
    
    function resetPassword(){
        let password = document.getElementById("newPassword").value;
        let resetCode = document.getElementById("resetCode").value;
        let email = document.getElementById("email").value;

        //validating information
        if( !password || !resetCode || !email){
            document.getElementById('errorMessage').innerHTML = "One of the fields is invalid";
            return;
        }
        document.getElementById('errorMessage').innerHTML = "";

        //validating firebase username
        updateUser(email, password, resetCode)
            .then((ans) => {
                if(!ans){
                    document.getElementById('errorMessage').innerHTML = "The indicated email is not registered or the code is incorrect. Please verify the information.";
                    return;
                }
                document.getElementById('errorMessage').innerHTML = "";
                navigate("/login");
            })
    }

    const navigate = useNavigate();

    return(
        <div className='bg-nmsu-white flex justify-center items-center w-screen h-fit flex-col py-40'>
            <div className=" flex flex-col justify-around items-center bg-white shadow-xl rounded-lg p-10 w-screen h-fit sm:w-10/12 md:w-5/12">
                
                <div class="w-60 h-auto">
                    <img class="h-full pl-8 lg:rounded-tr-none lg:rounded-bl-lg" src="./password.svg" alt="become-an-officer"/>     
                </div>
                
                <p className='text-red-700' id="errorMessage">
                    
                </p>

                <div class=" flex flex-col items-start w-full mt-10">
                    <p class="text-xl font-semibold mb-2">
                        New password:
                    </p>
                    <input class=" border-b-2 border-nmsu-crimson w-full px-3 outline-nmsu-crimson"   id="newPassword" ></input>
                </div>
                <div class="pt-10 flex flex-col items-start w-full mt-10">
                    <p class="text-xl font-semibold mb-2">
                        email:
                    </p>
                    <input class=" border-b-2 border-nmsu-crimson w-full px-3 outline-nmsu-crimson"   id="email" ></input>
                </div>
                <div class="pt-10 flex flex-col items-start w-full mt-10">
                    <p class="text-xl font-semibold mb-2">
                        Reset code:
                    </p>
                    <input class=" border-b-2 border-nmsu-crimson w-full px-3 outline-nmsu-crimson"   id="resetCode" ></input>
                </div>

                {/* input user password */}
                <button class="bg-nmsu-crimson text-white font-bold py-2 w-full rounded-md my-10"
                onClick={()=> {resetPassword()}}  >
                    Reset Password
                </button>

            </div>
        </div>
    )
}