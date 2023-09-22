import React, {Component, useState} from 'react';
import { Link  } from "react-router-dom";
import logotype from '../../Resources/Images/logotype/ICCC_logo_solid.png'; 
import menuIcon from '../../Resources/Images/Icons/menu_white.png'; 
import {WideButton} from "../WideButton"

function MenuSmall(props){
      const buttons = [] 

      function hideMenu(){
        setshowMenu(false)
      }

      for (let i = 0; i< props.options.length; i++){
          buttons.push(<WideButton message={props.options[i][0]} route={props.options[i][1]} hideMenu = {hideMenu} key={i}/>)
      }

      const [showMenu, setshowMenu] =  useState(false)

      let menu = <></>
      if(showMenu){
        menu =   
        <div class = "fixed top-0 m-0 p-0 w-screen h-fit flex flex-col">
          <button className='border-b-white border-b-4  divide-y-8 bg-nmsu-darkGray flex justify-end items-end w-full h-fit p-8' 
          onClick={() => setshowMenu(false)}>
              <p class="text-3xl  font-bold  text-white ">
                X
              </p>
          </button>
          <Link to="/"class="h-fit w-full bg-nmsu-crimson flex justify-center items-center border-b-white border-b-4 py-4" onClick={() => setshowMenu(false)}>
              <img src={logotype} className="h-14" alt="ICCC_logo" />
              <p class="text-lg text-white font-bold pl-6 ">Home</p>
          </Link>
          {buttons}
        </div>  
      }      
      return (   
        <div class=" fixed flex-col  top-0 w-screen justify-center sm:hidden ">
          <div className="bg-nmsu-crimson h-14 flex justify-between items-center shadow-lg w-full px-4">
              <Link to="/"class="h-full">
                  <img src={logotype} className="h-full" alt="ICCC_logo" />
              </Link>
              <button  class="flex items-center" onClick={() => setshowMenu(true)}>
                  <img src={menuIcon} className="h-5" alt="menu_icon" />
              </button>
          </div>  
          {menu}    
        </div> 
      );
}

export default MenuSmall