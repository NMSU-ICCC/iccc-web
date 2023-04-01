import React, {Component, useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import firebase from "../../firebase";

export default function LogIn(){
    const[users, setUsers] = useState([]);
    const[loading, setLoading] = useState(false);

    const ref =firebase.firestore().collection("users");
    console.log(ref)

    function getUsers(){
        setLoading(true);
        ref.onSnapshot((querySnapshot) => {
            const items = [];
            querySnapshot.forEach((doc) => {
                items.push(doc.data());
            })
            setUsers(items);
            setLoading(false);
        })
    }

    useEffect(() => {
        getUsers();
    }, [])


    if(loading){
        return <h1>loading...</h1>
    }

    return(  
        <div>
            <h1>users</h1>
            {
                users.map((user) =>(
                    <div>
                        {user.name}
                        {user.email}
                        {user.password}
                        {user.position}
                        {user.username}
                    </div>
                ))
            }
        </div>
    )
}