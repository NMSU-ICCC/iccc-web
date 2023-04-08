import React, {Component} from 'react';
import {Officers} from "./Officers";
import {WhoAreWe} from "./WhoAreWe";
import {Description} from './Description'


export default function AboutUs(){
    return(  
        <div>
            <Description/>
            <Officers/>
            <WhoAreWe/>
        </div>
    )
}