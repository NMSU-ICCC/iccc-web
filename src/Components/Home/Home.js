import React, {Component} from 'react';
import {Welcome} from './Welcome'
import {Activities} from './Activities'
import Meetings from './Meetings';
import { Description } from '../AboutUs/Description';
import Officers from '../AboutUs/Officers';
import { WhoAreWe } from '../AboutUs/WhoAreWe';

export default function Home(){
  return (   
    <>
        <div class="h-full relative">
          <Welcome/> 
        </div>
        <Meetings/>
        <Description/>
        <div class="h-full">
          <Activities/> 
        </div>
        <Officers/>
        <WhoAreWe/>
        
    </>   
  );
}