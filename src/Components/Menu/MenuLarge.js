import React, {Component} from 'react';
import { Link } from "react-router-dom";
import logotype from '../../Resources/Images/logotype/ICCC_logotype_solid.png'; 
import menuIcon from '../../Resources/Images/Icons/menu_white.png'; 
import {Button} from '../Button'

const menuOptions = [
  ['About us', "AboutUs"],
  ['Contact', "Contact"],
  ['Documents', "Documents"],
  ['Log in', "LogIn"],
]

export class MenuLarge extends Component{
  
    render() {
      const buttons = [] 
      for (let i = 0; i< menuOptions.length; i++){
          buttons.push(<Button message={menuOptions[i][0]} route={menuOptions[i][1]} key={i}/>)
      }

      return (   
        
        <div class="bg-nmsu-white justify-center items-center  w-screen h-auto flex-col p-20 ">
            {/* Big Menu */}
            <div class="hidden sm:w-screen sm:justify-center sm:fixed sm:top-0   ">                
              <nav className="bg-nmsu-crimson  px-8 h-14 flex justify-between items-center shadow-lg rounded-full my-3 w-11/12">
                  <Link to="/"  class="h-full">
                      <img src={logotype} className="h-full" alt="ICCC_logotype" />
                  </Link>
                  {buttons}
              </nav>
            </div>
            {/* small Menu */}
            <div class="block fixed top-0 w-screen justify-center sm:hidden ">
              <nav className="bg-nmsu-crimson h-14 flex justify-between items-center shadow-lg w-full px-4">
                  <a  class="h-full">
                      <img src={logotype} className="h-full" alt="ICCC_logo" />
                  </a>
                  <a  class="flex items-center">
                      <img src={menuIcon} className="h-5" alt="menu_icon" />
                  </a>
              </nav>
            </div>  
        </div> 

      );
    }
  }