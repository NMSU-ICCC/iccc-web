import { useState } from "react";

export default function Image(props){
    const [large, setLarge] = useState(false);

    function setSize(){
        let temp = large;
        setLarge(!temp);
    }

    let smImage = <img class=" h-20 w-20 rounded-sm z-100" src={props.url} alt={props.title} />
    let lgImage = <img class=" h-auto w-screen rounded-sm z-100" src={props.url} alt={props.title} />

    return(
        <div class="flex flex-col flex-wrap items-center justify-center w-fit h-fit" onClick={(e) => { setSize() }} > 
            {large ? lgImage : smImage}
            <p class="text-sm font-semi my-2 text-iccc-red ">{props.title}</p>
        </div>
    )
}