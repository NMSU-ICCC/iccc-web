import React, {useState} from 'react';
import {uploadFile} from "../../firebase";
import ButtonSolid from '../ButtonSolid';


export default function UploadImage(props){
    
    const [file, setFile] = useState(null)
    const [title, setTitle] = useState("")
    let notLoaded = <label htmlFor="filePicker" class=" w-fit h-fit p-5 rounded-md font-extrabold text-iccc-red whitespace-no-wrap hover:underline hover:cursor-pointer">
                    Load (.png, .jpg, .svg, .pdf)
                </label>  
    let loaded = <label htmlFor="filePicker" key="uploaded" class=" w-fit h-fit p-5 rounded-md font-extrabold text-iccc-red whitespace-no-wrap hover:underline hover:cursor-pointer">
                    LOADED!           
                </label> 

    function uploadFileToDataBase(){
        if(file == null){
            return
        }
        if(title.localeCompare("") == 0){
            return
        }
        uploadFile(title, file, "file");
    } 
    return(
        <div class="flex flex-col items-center justify-center border-2 border-iccc-red rounded-lg w-full h-full p-5 my-4">
            <p class="text-3xl font-bold m-1 ">
                Upload a picture or a pdf!
            </p>



            {/* This label replaces the button styles */}
            
            <div class="flex flex-col w-full h-auto justify-around md:flex-row">
                {file == null ? notLoaded: loaded}              
                
                <input type="text"  key="no-loaded"  class="border-iccc-red border-2 text-iccc-red rounded-lg px-5 my-5" value={title} placeholder="Give it a name"
                    onChange={e=> {                                   
                        setTitle(e.target.value)
                    }}>
                </input>

                {/*This button admits the file, but it is not easy to style it. For that reason, we hide it.
                    It still works, but looks like the label right about*/}
                <input  id="filePicker" class="w-0"
                        style={{visibility:"hidden"}} type="file" name="filename" accept="image/png, image/jpeg .pdf image/svg" 
                        onChange={e => {setFile(e.target.files[0])}}
                        /> 
            </div>
            <ButtonSolid clickHandler = {uploadFileToDataBase} title="submit resource"/>
        </div>
    )
}
