import Image from './Image';
import PDF from './PDF';
import Link from './Link';
import { useEffect, useState } from "react";
import {getAllResources, getResourcesLinks} from "../../firebase";

export default function Files(){       
    const [resourcesList, setResourcesList] = useState([]); //name, type, url
    const [resourcesLinksList, setResourcesLinksList] = useState([]); //name, link 
    useEffect(()=>{
        //get images and pdfs
        getAllResources()
        .then(ans =>{
            setResourcesList(ans);
            getResourcesLinks().then(links => {
                //get links
                setResourcesLinksList(links)
            })
        })

    }, [])
    let pdfs= []
    let images = []
    let links = []
    
    for (let index = 0; index < resourcesList.length; index++) {
        if(resourcesList[index]["type"].localeCompare("application/pdf") == 0)
            pdfs.push(<PDF key={"PDF"+index} title={resourcesList[index]["name"]} url={resourcesList[index]["url"]}/>  );
        else
            images.push(<Image key={"image"+index} title={resourcesList[index]["name"]} url={resourcesList[index]["url"]}/>);  
    }
    for (let index = 0; index < resourcesLinksList.length; index++) {
        console.log(resourcesLinksList[index])
        links.push(<Link key={"link"+index} title={resourcesLinksList[index]["name"]} url={resourcesLinksList[index]["link"]}/>);
    }


    return(
        <div class="flex flex-col w-screen h-fit py-40 justify-center items-center">    
            <h1 class="text-5xl font-semi mt-5 mb-20"> These are your resources</h1>        
            <p class="text-3xl text-iccc-red font-semi flex w-4/5 h-fit px-10 items-center justify-start mt-10">Links</p>
            <div class="w-4/5 h-auto bg-white p-5  flex flex-col justify-between items-center flex-wrap border-2 border-iccc-red rounded-lg">
                {links}
            </div>
            <p class="text-3xl text-iccc-red font-semi flex w-4/5 h-fit px-10 items-center justify-start mt-10">Images</p>
            <div class="w-4/5 h-auto bg-white p-5  flex flex-row justify-between items-center flex-wrap border-2 border-iccc-red rounded-lg">
                {images}
            </div>
                
            <p class="text-3xl text-iccc-red font-semi flex w-4/5 h-fit px-10 items-center justify-start mt-10">PDFs</p>
            <div class="w-4/5 h-auto bg-white p-5  flex flex-row justify-between items-center flex-wrap border-2 border-iccc-red rounded-lg">
                {pdfs}           
            </div>
        </div>
    )
}