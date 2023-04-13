import React, {useState} from 'react';
import { Link } from "react-router-dom";
import Menu from '../Menu/Menu'
import {login} from "../../firebase";
import { useNavigate  } from "react-router-dom";


export default function LogIn(){
    const [nameEmail, setNameEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState("");

    const LogInF = (e) => {
        setError("");
        login(nameEmail, password).then(a => {
            if(a === false){
                sessionStorage.setItem("sessionStarted", false);
                setError("Incorrect user or password");
            }
            if(a.localeCompare("manager") == 0){
                sessionStorage.setItem("sessionStarted", true);
                sessionStorage.setItem("position", "manager");
                navigate("/")
            }
            if(a.localeCompare("user") == 0){
                sessionStorage.setItem("sessionStarted", true);
                sessionStorage.setItem("position", "user");
                navigate("/")
            }
        })
    }
    const navigate = useNavigate();

    return(
        <div class="bg-nmsu-white flex justify-start w-screen h-auto flex-col">
  
            <div class="flex w-screen h-screen items-center justify-center mt-40">
                <div class=" flex flex-col justify-around items-center  bg-white shadow-xl rounded-lg px-10 min-h-screen w-screen h-full sm:w-10/12 sm:h-screen md:w-5/12 md:h-4/5 ">
                    
                    {/* Title container */}
                    <div>
                        <h1 class="text-5xl font-bold text-nmsu-crimson pb-4">
                            Log In
                        </h1>
                        <p class=" text-xl font-semibold">
                            to see your files and manage your account
                        </p>
                    </div>


                    
                    <div class="text-nmsu-crimson">
                        {error}
                    </div>

                    {/* input user name */}
                    <div class="flex flex-col items-start w-full">
                        <p class="text-xl font-semibold mb-2">
                            User name / Email:
                        </p>
                        <input class=" border-b-2 border-nmsu-crimson w-full px-3 outline-nmsu-crimson"
                            onChange={e => {setNameEmail(e.target.value)}}
                        ></input>
                    </div>

                    {/* input user password */}
                    <div class="flex flex-col items-start w-full">
                        <p class="text-xl font-semibold mb-2">
                        Password:
                        </p>
                        <input type="password" class=" border-b-2 border-nmsu-crimson w-full px-3 outline-nmsu-crimson"
                            onChange={e => {setPassword(e.target.value)}}
                        ></input>
                    </div>

                    {/* input user password */}
                    <button class="bg-nmsu-crimson text-white font-bold py-2 w-full rounded-md"
                    onClick={(e) => { LogInF(e) }} >
                            Log In
                    </button>

                    {/* register */}
                    <div class="flex  flex-col justify-start items-start w-full">
                        <p class="font-semibold">
                            Don't have an account yet?
                        </p>
                        <Link to="/signIn" class=" bg-transparent outline-none border-0 text-nmsu-crimson font-bold ">
                            Register
                        </Link>
                    </div>

                </div>
            </div>


            <Menu/>
        </div>  
    )
}