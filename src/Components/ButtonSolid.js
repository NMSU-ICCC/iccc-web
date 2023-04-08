export default function ButtonSolid(props){
    return(        
        <button class=" w-fit h-fit p-4 rounded-md font-bold text-white bg-iccc-red whitespace-no-wrap"
        type="submit" onClick={e => {props.clickHandler()}}>{props.title}</button>
    )
}