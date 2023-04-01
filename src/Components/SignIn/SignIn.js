import React, {Component, useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import firebase, {addUser} from "../../firebase";
import {Menu} from '../Menu/Menu'
import { GeneralButton } from '../GeneralButton';
import { useNavigate  } from "react-router-dom";

export default function SignIn(props){
    const [error, setError] = useState("");
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [code, setCode] = useState("");

    function validateName(n) {
        return n.length >= 2;   
    }
    function validateEmail(em) {
        return em.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);            
    }
    function validateUserName(un) {
        return un.length >= 2  && un.indexOf(' ') == -1;   
    }
    function validatePassword(p, pp) {
        return (p.length >= 5 ) && (pp.localeCompare(p) == 0)
    }
    function validateCode(c) {
        return c.localeCompare("ICCC+") == 0
    }

    const createAccount = async (e) => {
        setError("")
        if(!validateName(name)){
            setError("The name must be at least 2 characters long");
            return
        }
        if(!validateEmail(email)){
            setError("The email does not have a valid format");
            return
        }
        if(!validateUserName(userName)){
            setError("The user name must be at least 2 characters long");
            return
        }
        if(!validatePassword(password, password2)){
            setError("The passwords don't match or they are less than 5 characters long");
            return
        }
        if(!validateCode(code)){
            setError("The invitation code in invalid");
            return
        }
        addUser(name, email, userName, password).then(a => {
            if(a){
                navigate("/MyFiles")
            }
            else{
                setError("User already exists or invalid information")
            }
        })

    }
    const navigate = useNavigate();

    return(
        <div class="bg-nmsu-white flex justify-start w-screen h-auto flex-col">

            <div class="flex w-screen h-fit items-center justify-center mt-40">
                <div class="py-20 flex flex-col justify-around items-center  bg-white shadow-xl rounded-lg px-10 min-h-screen w-screen h-fit sm:w-10/12 sm:min-h-screen sm:h-screen md:w-5/12 md:h-4/5 md:min-h-screen ">
                    
                    {/* Title container */}
                    <div class="mb-20">
                        <h1 class="text-5xl font-bold text-nmsu-crimson pb-4">
                            Sign In
                        </h1>
                        <p class=" text-xl font-semibold">
                            Create an ICCC account!
                        </p>
                    </div>
                    

                    <div class="text-nmsu-crimson">
                        {error}
                    </div>


                    {/* input name */}
                    <div class="flex flex-col items-start w-full  mb-5">
                        <p class="text-xl font-semibold mb-2">
                            Name:
                        </p>
                        <input class=" border-b-2 border-nmsu-crimson w-full px-3 outline-nmsu-crimson"
                            onChange={e => {setName(e.target.value)}}
                        ></input>
                    </div>

                    {/* input email */}
                    <div class="flex flex-col items-start w-full mb-20">
                        <p class="text-xl font-semibold mb-2">
                            Email:
                        </p>
                        <input type="email" class=" border-b-2 border-nmsu-crimson w-full px-3 outline-nmsu-crimson"
                            onChange={e => {setEmail(e.target.value)}}
                        ></input>
                    </div>


                    
                    {/* input user name */}
                    <div class="flex flex-col items-start w-full mb-5">
                        <p class="text-xl font-semibold mb-2">
                            User name (lowercase):
                        </p>
                        <input class=" border-b-2 border-nmsu-crimson w-full px-3 outline-nmsu-crimson"
                            onChange={e => {setUserName(e.target.value.toLowerCase())}}
                        ></input>
                    </div>

                    {/* input password */}
                    <div class="flex flex-col items-start w-full  mb-5">
                        <p class="text-xl font-semibold mb-2">
                            Password:
                        </p>
                        <input type="password" class=" border-b-2 border-nmsu-crimson w-full px-3 outline-nmsu-crimson"
                            onChange={e => {setPassword(e.target.value)}}
                        ></input>
                    </div>
                    {/* input repeat password */}
                    <div class="flex flex-col items-start w-full  mb-20">
                        <p class="text-xl font-semibold mb-2">
                            Repeat password:
                        </p>
                        <input type="password" class=" border-b-2 border-nmsu-crimson w-full px-3 outline-nmsu-crimson"
                            onChange={e => {setPassword2(e.target.value)}}
                        ></input>
                    </div>

                    
                    {/* input invitation code */}
                    <div class="flex flex-col items-start w-full  mb-20">
                        <p class="text-xl font-semibold mb-2">
                            Invitation code:
                        </p>
                        <input class=" border-b-2 border-nmsu-crimson w-full px-3 outline-nmsu-crimson"
                            onChange={e => {setCode(e.target.value)}}
                        ></input>
                    </div>

                    {/* input user password */}
                    <button class="bg-nmsu-crimson text-white font-bold py-2 w-full rounded-md"
                    onClick={(e) => { createAccount(e) }} value="sign in">
                            Sign In
                    </button>


                </div>
            </div>


            <Menu/>
        </div>  
    )
}