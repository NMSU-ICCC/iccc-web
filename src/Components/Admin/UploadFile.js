import React, {useState} from 'react';
import {uploadFile} from "../../firebase";
import ButtonSolid from '../ButtonSolid';

export default function UploadFile(){
    const [file, setfile] = useState(null)
    const [title, setTitle] = useState("")

    function uploadFileToDataBase(){
        if(file == null){
            return
        }
        if(title.localeCompare("") == 0){
            return
        }
        uploadFile(title, file, "file")
    }
    return(
        <div class="w-screen h-screen flex items-center justify-center body-font font-raleway">
            <div class="w-fit bg-white p-10 m-10 flex h-fit flex-col rounded-lg shadow-2xl justify-center items-center  md:flex-row ">
                <img class="h-36" src="./undraw_server_push_re_303w.svg" alt="Git-cheat-code"/>
                
                <div class="p-5 h-full">
                    <div class="text-xl font-semi to see">
                        Upload new resources for other members of the club to see
                    </div>
                    <div class="pt-10 flex flex-col justify-center items-center">

                        {/* This label replaces the button styles */}
                        <label htmlFor="filePicker" class=" w-fit h-fit p-5 rounded-md font-extrabold text-iccc-red whitespace-no-wrap hover:underline hover:cursor-pointer">
                            Load (.png, .jpg, .svg, .pdf)
                        </label>
                        
                        <input type="text"  class="border-iccc-red border-2 text-iccc-red rounded-lg px-5 my-5" value={title} placeholder="Give it a name"
                            onChange={e=> {                                   
                                setTitle(e.target.value)
                            }}>
                        </input>

                        {/*This button admits the file, but it is not easy to style it. For that reason, we hide it.
                            It still works, but looks like the label right about*/}
                        <input  id="filePicker" class="w-0"
                                style={{visibility:"hidden"}} type="file" name="filename" accept="image/png, image/jpeg .pdf image/svg" 
                                onChange={e => {setfile(e.target.files[0])}}
                        /> 

                        <ButtonSolid clickHandler = {uploadFileToDataBase} title="submit resource"/>

                    </div>
                </div>
            </div>
        </div>
    )
}