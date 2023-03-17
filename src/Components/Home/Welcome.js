import React, {Component} from 'react';
import { Link } from "react-router-dom";

export class Welcome extends Component{
    render() {
      return (   
        <div class="bg-white flex w-screen min-h-screen max-h-full bg-[url('Resources/Images/NMSU_2.jpg')] bg-no-repeat bg-cover p-10 pt-20  items-center justify-center sm:p-10" >
            <div class="bg-white p-10 text-left justify-center items-center flex-col opacity-80 text-2xl text-black w-full h-fit">
                <p class="text-7xl font-bold" > Welcome </p>
                <p >
                  To the International Collaborative Coding Club at NMSU.
                </p>
            </div>
        </div>   
      );
    }
}