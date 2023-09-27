export default function ProjectTechnologies(props){
    return(        
        <div className="w-full flex justify-start items-start flex-row py-2 ">
            <label className="font-bold pr-3 break-words tex flex flex-row items-start justify-start">Technologies: </label>
            <div className="flex flex-row flex-wrap w-full h-auto gap-2">

                {
                    props.technologies.map((technology) =>{
                        return (
                            <div key="technology" className="px-4 shadow-lg  rounded-lg bg-sky-600 font-semibold text-white flex-nowrap">
                                {technology}
                            </div>
                        )
                    })
                }
            </div>
        </div>  
    )
}