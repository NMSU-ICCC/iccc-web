import React, {useState} from 'react';
import {uploadResourceFile} from "../../firebase";
import ButtonSolid from '../ButtonSolid';


export default function UploadPDF(){
    // labels for 'load resource'
    let notLoaded = <label htmlFor="PDFPicker" class=" w-fit h-fit rounded-md font-extrabold text-iccc-red whitespace-no-wrap hover:underline hover:cursor-pointer">    Load (.pdf)   </label>  ;
    let loaded = <label htmlFor="PDFPicker"  class=" w-fit h-fit rounded-md font-extrabold text-iccc-red whitespace-no-wrap hover:underline hover:cursor-pointer">    LOADED!       </label> ;
    
    //store information of the link
    const [PDF, setPDF] = useState(null)
    const [titlePDF, setTitlePDF] = useState("")
    const [errorMessage, setErrorMesage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    function uploadFileToDataBase(){
        if(PDF == null || titlePDF.localeCompare("") == 0){
            setErrorMesage("No file has been loaded yet");
            return;
        }
        
        if(PDF["type"].localeCompare("application/pdf") == 0 )
        {
            setErrorMesage("");
            setSuccessMessage("pdf loaded successfully!");
            uploadResourceFile(titlePDF, PDF, "pdf")
            .then(answer => {
                setSuccessMessage("");
                window.location.reload();
            })
        }
        else{
            setErrorMesage("Invalid file type");
            return;
        }
    } 


    return(
        <div class="flex flex-col w-full h-fit items-center justify-center border-2 border-iccc-red rounded-lg p-5 my-4">            
            <h1 class="text-3xl font-bold my-5 ">    Upload a PDf!  </h1>

            <p class="text-red-600 font-bold text-sm italic">{errorMessage}</p>
            <p class="text-green-600 font-bold text-sm italic">{successMessage}</p>

            <div class="flex flex-col w-full h-fit justify-start items-start ">
                {/* This label replaces the upload input to allow styling it */}            
                {PDF == null ? notLoaded: loaded}              
                
                <input type="text"  key="loadpdf"  class="border-iccc-red border-2 text-iccc-red rounded-lg px-5 w-full" value={titlePDF} placeholder="Give it a name"    onChange={e=> {  setTitlePDF(e.target.value)   }}/>

                {/*This button admits the file, but it is not easy to style it. For that reason, we hide it. It still works, but looks like the label right about*/}
                <input  id="PDFPicker" key="pickerpdf" class="w-0" style={{visibility:"hidden"}} type="file" name="filename" accept='application/pdf'
                        onChange={e => {setPDF(e.target.files[0])}}    /> 
                
            </div>
            
            <ButtonSolid key="buttonPdf" clickHandler = {uploadFileToDataBase} title="submit PDF"/>
        </div>
    )
}
