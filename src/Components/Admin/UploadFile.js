import React, {useState} from 'react';
import UploadImage from './UploadImage';

export default function UploadFile(){
    return(
        <div class="w-screen h-screen flex items-center justify-center body-font font-raleway">
            <div class="w-fit bg-white p-10 m-10 flex h-fit flex-col rounded-lg shadow-2xl justify-center items-center  md:flex-row ">
                <img class="h-36" src="./undraw_server_push_re_303w.svg" alt="Git-cheat-code"/>
                
                <div class="p-5 h-full">
                    <div class="text-xl font-semi to see">
                        Upload new resources for other members of the club to see
                    </div>
                    <div class="pt-10 flex flex-col justify-center items-center">

                        <UploadImage/>

                    </div>
                </div>
            </div>
        </div>
    )
}