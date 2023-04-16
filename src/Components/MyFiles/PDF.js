import { useState } from "react";
import ButtonBorder from "../ButtonBorder";

export default function PDF(props){
    const [large, setLarge] = useState(false);
    const [text, setText] = useState("Click here to see pdf");

    function setSize(){
        let temp = large;
        setLarge(!temp);

        if(text.localeCompare("Click here to see pdf") == 0){
            setText("Click here to hide pdf")
        }
        else{
            setText("Click here to see pdf")
        }
    }

    let smPDF = <iframe class=" h-0 w-0" src={props.url}/>
    let lgPDF = <iframe class=" h-screen w-full" src={props.url}/>

    return(
        <div class="w-screen h-auto my-5"> 
            <div class="flex flex-row w-full h-fit items-center justify-center flex-wrap">
                <p class="text-3xl font-extrabold text-iccc-red px-5">{props.title}</p>
                <ButtonBorder title={text} clickHandler={setSize}/>
            </div>           
            {large ? lgPDF : smPDF} 
        </div>
    )
}