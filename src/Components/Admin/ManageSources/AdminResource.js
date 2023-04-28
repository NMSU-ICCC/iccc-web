import {deleteResource} from "../../../firebase";
import { useEffect } from "react";
import { useNavigate  } from "react-router-dom";

export default function AdminResource(props){
    function removeResource(){
        deleteResource(props.title)
    }
    useEffect(() => {
        navigate("/MyFiles");
    }, [removeResource])
    
    const navigate = useNavigate();

    return(
        <div class="flex flex-row items-center justify-between bg-white shadow-xl rounded-lg w-fit m-5 ">
            {/* <iframe src={props.title}/> */}
            <p class="text-md font-bold w-fit px-4">
                {props.title}
            </p>
            {/* <p class=" w-full px-5 text-md font-bold  flex-wrap whitespace-nowrap  overflow-hidden">
                {props.url}
            </p> */}
            <button class="bg-green-600 w-fit h-full px-4">
                edit
            </button>
            <button class="bg-red-600 rounded-e-lg px-4 font-extrabold" onClick={(e) => {removeResource()}}>
                delete
            </button>

        </div>
    )
}