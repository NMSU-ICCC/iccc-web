export default function ButtonBorder(props){
    return(        
        <button class=" w-fit h-fit p-4 rounded-md font-bold  border-iccc-red border-2 text-iccc-red whitespace-no-wrap"
        type="submit" onClick={e => {props.clickHandler()}}>{props.title}</button>
    )
}