import React, {}  from 'react';
import {Repository} from './Repository';
import {Slack} from './Slack';
import {Separator} from './Separator';
import ExternalLinks from './ExternalLinks';


export default function PublicResources(){

  return (   
    <div  class="flex flex-col items-center justify-around mt-20">
        <div class="flex justify-center items-center flex-col w-screen h-fit min-h-screen">
            <ExternalLinks/>
        </div>

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


