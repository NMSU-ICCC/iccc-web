import React, {Component} from 'react';
import { Link } from "react-router-dom";
import logotype from '../../Resources/Images/logotype/ICCC_logo_solid.png'; 
import menuIcon from '../../Resources/Images/Icons/menu_white.png'; 

export class MenuSmall extends Component{
    render() {
      return (   
        <nav className="bg-nmsu-crimson h-14 flex justify-between items-center shadow-lg w-full px-4">
            <a  class="h-full">
                <img src={logotype} className="h-full" alt="ICCC_logo" />
            </a>
            <a  class="flex items-center">
                <img src={menuIcon} className="h-5" alt="menu_icon" />
            </a>
        </nav>

      );
    }
  }