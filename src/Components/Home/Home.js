import React, {Component} from 'react';
import {Welcome} from './Welcome'
import {Activities} from './Activities'
import Meetings from './Meetings';

export default function Home(){
  return (   
    <>
        <div class="h-full relative">
          <Welcome/> 
        </div>
        <Meetings/>
        <div class="h-full">
          <Activities/> 
        </div>
    </>   
  );
}