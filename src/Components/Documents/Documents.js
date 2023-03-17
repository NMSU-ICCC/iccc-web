import React, {Component }  from 'react';
import { Link } from "react-router-dom";
import {Menu} from '../Menu/Menu'
import {Repository} from './Repository'


export class Documents extends Component{
    render() {
      return (   
        <div class="bg-nmsu-white flex justify-center items-center  w-screen h-auto flex-col p-20 ">
            <Repository/>
            <Menu/>
            <div class="hidden sm:flex sm:content-center sm:flex-col items-center sm:justify-center sm:h-screen sm:w-screen sm:p-20">
                <div class="text-2xl pb-4 font-bold">Constituion</div>    
                the following file can be downloaded            
                <iframe class="w-10/12 h-full" src="../../Constitution.pdf#view=FitW"></iframe>
                <iframe class="w-10/12 h-full" src="./Constitution.pdf#view=FitW"></iframe>
                <iframe class="w-10/12 h-full" src="Constitution.pdf#view=FitW"></iframe>
            </div> 
        </div>   
      );
    }
  }


