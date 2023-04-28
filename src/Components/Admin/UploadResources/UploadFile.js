import React, {useState} from 'react';
import UploadImage from './UploadImage';
import UploadLink from './UploadLink';
import UploadPDF from './UploadPDF';

export default function UploadFile(){
    return(
        <div class="w-full h-fit flex items-center justify-center body-font font-raleway my-5">
            <div class="w-fit bg-white p-10 m-10 flex h-fit flex-col rounded-lg shadow-2xl justify-center items-center">
                <img class="h-36" src="./undraw_server_push_re_303w.svg" alt="Git-cheat-code"/>
                
                <div class="p-5 h-fit">
                    <div class="text-xl font-semi to see">
                        Upload new resources for other members of the club to see
                    </div>
                    <div class="pt-10 flex flex-col justify-center items-center h-fit w-full">

                        <UploadImage key="loadImage"/>
                        <UploadPDF key="loadPDF"/>
                        <UploadLink key="loadLink"/>

                    </div>
                </div>
            </div>
        </div>
    )
}