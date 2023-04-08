import React, {Component} from 'react';
import {Welcome} from './Welcome'
import {Activities} from './Activities'

export default function Home(){
  return (   
    <>
        <div class="h-full relative">
          <Welcome/> 
        </div>
        <div class="h-full">
          <Activities/> 
        </div>
    </>   
  );
}