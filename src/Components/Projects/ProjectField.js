export default function ProjectField(props){

    return(        
        <div className="w-full flex justify-start items-start flex-row py-2 ">
            <label className="font-bold pr-3 break-words tex flex flex-row items-start justify-start">{props.fieldName}: </label>
            {
                props.fieldName == "ProjectLink"
                ?
                <a href={props.fieldValue} className="hover:text-iccc-red">Check this website</a>
                :
                <p className="break-all text-left">{props.fieldValue}</p>
            }
        </div>   
    )
}