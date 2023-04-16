import React, {} from 'react';
import { useEffect, useState } from "react";
import {getAllResources, getResourcesLinks} from "../../firebase";
import PDF from './PDF';
import Image from './Image';
import Link from './Link';
import Cover from './Cover';

export default function MyFiles(){    
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
        links.push(<Link key={"link"+index} title={resourcesLinksList[index]["title"]} url={resourcesLinksList[index]["link"]}/>);
    }



    return(
        <div  class="flex flex-col items-center justify-around mt-20">    
            <Cover/>        
            
            <p class="text-3xl text-iccc-red font-semi"> Links</p>
            <div class="w-4/5 h-auto bg-white p-5  flex flex-col justify-between items-center flex-wrap border-2 border-iccc-red rounded-lg">
                {links}
            </div>
            <p class="text-3xl text-iccc-red font-semi mt-10"> images</p>
            <div class="w-4/5 h-auto bg-white p-5  flex flex-row justify-between items-center flex-wrap border-2 border-iccc-red rounded-lg">
                {images}
            </div>
                
            <p class="text-3xl text-iccc-red font-semi mt-10"> PDFs</p>
            <div class="w-4/5 h-auto bg-white p-5  flex flex-row justify-between items-center flex-wrap border-2 border-iccc-red rounded-lg">
                {pdfs}           
            </div>
        </div>   
    )
    
}