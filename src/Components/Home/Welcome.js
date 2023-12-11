import React, {Component} from 'react';
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import iccc_1 from './iccc-1.jpg' 
import iccc_2 from './iccc-2.jpg' 
import iccc_3 from './iccc-3.jpg' 
import iccc_4 from './iccc-4.jpg' 
import iccc_5 from './iccc-5.jpg' 

export class Welcome extends Component{
    render() {
      return (   
        // <div class="bg-white flex w-screen min-h-screen max-h-full bg-[url('Resources/Images/NMSU_2.jpg')] bg-no-repeat bg-cover p-10 pt-20  items-center justify-center sm:p-10" >
        //     <div class="bg-white p-10 text-left justify-center items-center flex-col opacity-80 text-2xl text-black w-full h-fit">
        //         <p class="text-4xl sm:text-7xl sm:font-bold " > Welcome </p>
        //         <p >
        //           To the International Collaborative Coding Club at NMSU.
        //         </p>
        //         <p >
        //           Be part of projects, mock interviews, events and more.
        //         </p>
        //     </div>
        // </div>   
        <div  className='w-screen h-full'>
            <Carousel emulateTouch="true" className='h-full w-full' dynamicHeight={false}>
                <div className='h-screen bg-cover w-full'>
                    <img src={iccc_3} />
                    <p className="legend text-6xl " style={{fontSize: "2rem"}}>Welcome To the International Collaborative Coding Club at NMSU.</p>
                </div>
                <div className='h-screen bg-cover w-full'>
                    <img src={iccc_5} />
                </div>
                <div className='h-screen bg-cover w-full'>
                    <img src={iccc_1} />
                </div>
                {/* <div className='h-screen bg-cover w-full'>
                    <img src={iccc_2} />
                </div> */}
            </Carousel>
        </div>
      );
    }
}