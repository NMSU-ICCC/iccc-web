import React, {Component} from 'react';
import { Link } from "react-router-dom";
import {Officers} from "./Officers";
import {WhoAreWe} from "./WhoAreWe";
import {Menu} from '../Menu/Menu';
import {Description} from './Description'


export class AboutUs extends Component{
    render(){
        return(  
            <div class="bg-nmsu-white flex justify-center items-center  w-screen h-auto flex-col">
                <Description/>
                <Officers/>
                <WhoAreWe/>
                <Menu/>
            </div>
        )
    }
}