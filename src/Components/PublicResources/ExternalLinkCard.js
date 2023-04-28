import { GeneralButton } from "../GeneralButton";


export default function ExternalLinkCard(props){
    return(
        <div class="flex justify-center items-center flex-col h-fit p-5 lg:flex-row w-10/12 lg:w-2/5 bg-white rounded-xl shadow-xl my-10 ">
            
            <img class="h-full w-full rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                            src={props.icon}
                            alt={props.alternativeText} />
            <div class="px-5">
                {props.description}
                <GeneralButton name={props.buttonText} link ={props.link}/>
            </div>
        </div>
    )
}