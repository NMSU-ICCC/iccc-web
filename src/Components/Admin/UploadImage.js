import React, {useState} from 'react';
import {uploadResourceFile} from "../../firebase";
import ButtonSolid from '../ButtonSolid';


export default function UploadImage(){
    // labels for 'load resource'
    let notLoaded = <label htmlFor="imagePicker" class=" w-fit h-fit rounded-md font-extrabold text-iccc-red whitespace-no-wrap hover:underline hover:cursor-pointer">    Load (.png, .jpg, .svg, .jpeg)   </label>  ;
    let loaded = <label htmlFor="imagePicker" class=" w-fit h-fit rounded-md font-extrabold text-iccc-red whitespace-no-wrap hover:underline hover:cursor-pointer">    LOADED!       </label> ;
    
    //store information of the link
    const [image, setImage] = useState(null)
    const [titleImage, setTitleImage] = useState("")
    const [errorMessage, setErrorMesage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    function uploadImageToDataBase(){
        if(image == null || titleImage.localeCompare("") == 0){
            setErrorMesage("No image has been loaded yet");
            return;
        }
        
        if(image["type"].localeCompare("image/png") == 0 || image["type"].localeCompare("image/jpeg") == 0 || image["type"].localeCompare("image/jpg") == 0  || image["type"].localeCompare("image/svg") == 0 )
        {
            setErrorMesage("");
            setSuccessMessage("image loaded successfully!");
            uploadResourceFile(titleImage, image, "image")            
            .then(answer => {
                setSuccessMessage("");
                window.location.reload();
            })
        }
        else{
            setErrorMesage("Invalid image type");
            return;
        }
    } 


    return(
        <div class="flex flex-col w-full h-fit items-center justify-center border-2 border-iccc-red rounded-lg p-5 my-4">            
            <h1 class="text-3xl font-bold my-5 ">    Upload an Image!  </h1>

            <p class="text-red-600 font-bold text-sm italic">{errorMessage}</p>
            <p class="text-green-600 font-bold text-sm italic">{successMessage}</p>

            <div class="flex flex-col w-full h-fit justify-start items-start ">
                {/* This label replaces the upload input to allow styling it */}            
                {image == null ? notLoaded: loaded}              
                
                <input type="text"  key="loadimage"  class="border-iccc-red border-2 text-iccc-red rounded-lg px-5 w-full" value={titleImage} placeholder="Give it a name"    onChange={e=> {  setTitleImage(e.target.value)   }}/>

                {/*This button admits the file, but it is not easy to style it. For that reason, we hide it. It still works, but looks like the label right about*/}
                <input  id="imagePicker" key="pickerimage" class="w-0" style={{visibility:"hidden"}} type="file" name="filename" accept="image/png, image/jpeg image/svg image/jpg" 
                        onChange={e => {setImage(e.target.files[0])}}    /> 
                
            </div>
            
            <ButtonSolid  key="buttonImage" clickHandler = {uploadImageToDataBase} title="submit image"/>
        </div>
    )
}
