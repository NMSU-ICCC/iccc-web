import React, {useEffect, useState } from 'react';
import MenuLarge from './MenuLarge';
import MenuSmall from './MenuSmall';


export default function Menu(props){  
      const [menuOptions, setMenuOptions] = useState([]);
      useEffect(() => {
        if(props.loggedIn == "true"){
          // This render is for manager
          if(props.position.localeCompare("manager") == 0){
            setMenuOptions([
              // ['About us', "/AboutUs"],
              ['Projects', "/Projects"],
              ['Public Resources', "/PublicResources"],
              ['Admin', "/Admin"],
              ['My Files', "/MyFiles"],
              ['Log out', "/LogOut"],
            ])
          }
          // This render is for regular users
          if(sessionStorage.getItem("position").localeCompare("user") == 0){
            setMenuOptions([
              // ['About us', "/AboutUs"],
              ['Projects', "/Projects"],
              ['Public Resources', "/PublicResources"],
              ['My Files', "/MyFiles"],
              ['Log out', "/LogOut"],
            ])
          }
        }
        // This render is for no users
        else{        
          setMenuOptions([
          //   ['About us', "/AboutUs"],
            ['Projects', "/Projects"],
            ['Public Resources', "/PublicResources"],
            ['Log in', "/LogIn"],
          ])
        }

      }, [props]);
  
      return (           
        <div class="bg-nmsu-white flex justify-center items-center w-screen h-auto flex-col z-50">
            { <MenuLarge options={menuOptions} />}
            { <MenuSmall options={menuOptions} />}             
        </div> 
      );
}