import React, {}  from 'react';
import {Repository} from './Repository';
import {Slack} from './Slack';
import {Separator} from './Separator';


export default function Resources(){
  return (   
    <div  class="flex flex-col items-center justify-around mt-20">
        <Separator title="links" description="The following links are quick access to the club's resources. The external websites are all safe"/>
          <Repository/>
          <Slack/>

        <Separator title="Cheat codes" description="Because many of our projects require the use of the console, we provide some useful cheat codes that are
        fit the basic needs for our club. If the functionality you are trying to achieve cannot be obtained from here, you can always contact an officer or project manager and request some help. We are here to help you!"/>
        
        {/* <div class="w-11/12 h-screen p-0 m-0">
            <iframe class="w-full h-5/6 p-0 m-0" src="./sheets.pdf#view=FitW"></iframe>
        </div>  */}

        <Separator title="Bylaws" description="
          If you have any doubt about our processes or work, you can always consult our constitution to make you have the correct information.
          This document can also help you understand your rights and responsabilities, the ones from the officers, and how to fill a complain or request an officer position. 
          We encorage you to read it throughly and have it always present when working in the club.
        "/>
        <div class="w-11/12 h-screen p-0 m-0">
            <iframe class="w-full h-5/6 p-0 m-0" src="./Constitution.pdf#view=FitW"></iframe>
        </div> 
    </div>   
  );
  }


