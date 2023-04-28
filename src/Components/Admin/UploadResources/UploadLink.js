import React, {useState} from 'react';
import {uploadResourceLink} from "../../../firebase";
import ButtonSolid from '../../ButtonSolid';
import { useNavigate  } from "react-router-dom";


export default function UploadLink(props){
    
    const [url, setUrl] = useState("");
    const [title, setTitle] = useState("");
    const [errorMessage, setErrorMesage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    function uploadFileToDataBase(){        
        if(url == null || url.localeCompare("") == 0){
            setErrorMesage("No link has been indicated yet");
            return;
        }
        if(title == null || title.localeCompare("") == 0){
            setErrorMesage("No title has been indicated yet");
            return;
        }
        
        setErrorMesage("");
        uploadResourceLink(url, title);
        setSuccessMessage("link loaded successfully!");
        setTimeout(function() {
            setSuccessMessage("");
            navigate("/MyFiles");
          }, 500);
    } 
    const navigate = useNavigate();
    return(
        <div class="flex flex-col items-center justify-center border-2 border-iccc-red rounded-lg w-full h-full p-5 my-4">
            <p class="text-3xl font-bold m-1 ">
                Upload a link!
            </p>
            
            <p class="text-red-600 font-bold text-sm italic">{errorMessage}</p>
            <p class="text-green-600 font-bold text-sm italic">{successMessage}</p>

            <div class="flex flex-col w-full h-auto justify-around md:flex-row ">
                <input type="text"  key="LoadLinkUrl"  class="border-iccc-red border-2 text-iccc-red rounded-lg px-5 my-5" value={url} placeholder="indicate the url"
                    onChange={e=> {                                   
                        setUrl(e.target.value)
                    }}>
                </input>
                <input type="text"  key="loadLinkTitle"  class="border-iccc-red border-2 text-iccc-red rounded-lg px-5 my-5" value={title} placeholder="Give it a name"
                    onChange={e=> {                                   
                        setTitle(e.target.value)
                    }}>
                </input>
            </div>

            <ButtonSolid clickHandler = {uploadFileToDataBase} title="submit resource"/>
        </div>
    )
}
