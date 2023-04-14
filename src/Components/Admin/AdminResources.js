import AdminResource from "./AdminResource";
import { useEffect, useState } from "react";
import {getAllResources} from "../../firebase";

export default function AdminResources(){
    const [resourcesList, setResourcesList] = useState([]);
    useEffect(()=>{
        getAllResources()
        .then(ans =>{
            setResourcesList(ans);
        })
    }, [])
    const resources = []
    for (let index = 0; index < resourcesList.length; index++) {
        resources.push( <AdminResource title={resourcesList[index]["name"]} type={resourcesList[index]["type"]} url={resourcesList[index]["url"]}/>  )
    }
    return(
        <div class="flex flex-col items-center justify-center w-5/6 h-fit my-10">
            <h1 class="width-full text-4xl font-bold">Current resources</h1>
            {resources}
        </div>
    )
}