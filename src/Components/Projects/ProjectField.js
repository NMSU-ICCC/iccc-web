export default function ProjectField(props){

    return(        
        <div className="w-full flex justify-start items-start flex-row py-2 ">
            <label className="font-bold pr-3  flex flex-row items-start justify-start">{props.fieldName}: </label>
            {
                props.fieldName == "ProjectLink"
                ?
                <a href={props.fieldValue} className="text-cyan-600 hover:text-iccc-red hover:font-semibold">Check this website</a>
                :
                <p className="text-left">{props.fieldValue}</p>
            }
        </div>   
    )
}