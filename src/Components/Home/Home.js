import React, {Component} from 'react';
import { Link } from "react-router-dom";
import {Menu} from '../Menu/Menu'
import {Welcome} from './Welcome'
import {Activities} from './Activities'


const menuOptions = [
  ['About us', "/AboutUs"],
  ['Contact', "/Contact"],
  ['Resources', "/Documents"],
  ['Log in', "/LogIn"],
]

export class Home extends Component{
  render() {
    return (   
      <div class="bg-nmsu-white flex justify-start w-screen h-auto flex-col ">

          <div class="h-full relative">
            <Welcome/> 
          </div>
          <div class="h-full">
            <Activities/> 
          </div>
          <Menu/>
      </div>   
    );
  }
}