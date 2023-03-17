import React, {Component} from 'react';
import { Link } from "react-router-dom";

export class Description extends Component{
    render() {
      return (   
        <div class="bg-white w-screen min-h-screen max-h-full bg-[url('Resources/Images/NMSU_1.jpg')] bg-no-repeat bg-cover p-10 pt-20  flex items-center justify-center sm:p-10" >
            <div class="bg-black p-10 text-left opacity-60 text-2xl text-white w-full h-fit">
                The International Collaborative Coding Club at New Mexico State University has the goal of helping 
                its members to develop the confidence and skills to succeed in their careers as Computer Scientists. 
                In order to achieve this, weekly meetings are held where coding problems are discussed, and mock interviews 
                take place in realistic scenarios. In parallel, different programming projects are developed with relevant 
                technologies and purposes for the participants, with the aim of helping them build their portfolios and getting 
                in touch with the industry’s work standards.
            </div>
        </div>   
      );
    }
}