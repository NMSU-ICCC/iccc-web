import React, {Component} from 'react';
import { Link } from "react-router-dom";
import logotype from '../../Resources/Images/logotype/ICCC_logotype_solid.png'; 
import menuIcon from '../../Resources/Images/Icons/menu_white.png'; 
import {Button} from '../Button'


export class MenuLarge extends Component{
  
    render() {
      const buttons = [] 
      for (let i = 0; i< this.props.options.length; i++){
          buttons.push(<Button message={this.props.options[i][0]} route={this.props.options[i][1]} key={i}/>)
      }

      return (   
        <div class="hidden sm:w-screen sm:flex sm:justify-center sm:fixed sm:top-0   ">                
          <nav className="bg-nmsu-crimson  px-8 h-14 flex justify-between items-center shadow-lg rounded-full my-3 w-11/12">
              <Link to="/"  class="h-full">
                  <img src={logotype} className="h-full" alt="ICCC_logotype" />
              </Link>
              {buttons}
          </nav>
        </div>
      );
    }
  }