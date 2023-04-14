import React, {useState} from 'react';
import {uploadFile} from "../../firebase";
import ButtonSolid from '../ButtonSolid';


export default function UploadLink(props){
    
    const [url, setUrl] = useState(null)
    const [title, setTitle] = useState("")

    function uploadFileToDataBase(){
        // if(file == null){
        //     return
        // }
        // if(url.localeCompare("") == 0){
        //     return
        // }
        // uploadFile(title, file, "file");
        // window.location.reload();
    } 
    return(
        <div class="flex flex-col items-center justify-center border-2 border-iccc-red rounded-lg w-full h-full p-5 my-4">
            <p class="text-3xl font-bold m-1 ">
                Upload a link!
            </p>
            <div class="flex flex-col w-full h-auto justify-around md:flex-row ">
                <input type="text"  key="no-loaded"  class="border-iccc-red border-2 text-iccc-red rounded-lg px-5 my-5" value={url} placeholder="indicate the url"
                    onChange={e=> {                                   
                        setUrl(e.target.value)
                    }}>
                </input>
                <input type="text"  key="no-loaded"  class="border-iccc-red border-2 text-iccc-red rounded-lg px-5 my-5" value={title} placeholder="Give it a title"
                    onChange={e=> {                                   
                        setTitle(e.target.value)
                    }}>
                </input>
            </div>

            <ButtonSolid clickHandler = {uploadFileToDataBase} title="submit resource"/>
        </div>
    )
}
