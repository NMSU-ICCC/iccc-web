import React, {Component} from 'react';
import { Link } from "react-router-dom";
import logotype from '../../Resources/Images/logotype/ICCC_logotype_solid.png'; 
import menuIcon from '../../Resources/Images/Icons/menu_white.png'; 
import {Button} from '../Button'
import { MenuLarge } from './MenuLarge';
import MenuSmall from './MenuSmall';

const menuOptions = [
  ['About us', "/AboutUs"],
  ['Documents', "/Documents"],
  ['My Documents', "/LogIn"],
]

export class Menu extends Component{
  
    render() {
      return (           
        <div class="bg-nmsu-white flex justify-center items-center  w-screen h-auto flex-col p-20 ">
            { <MenuLarge options={menuOptions} />}
            { <MenuSmall options={menuOptions} />}
             
        </div> 

      );
    }
  }