import ProjectField from "./ProjectField"
import YoutubeEmbed from "./YoutubeEmbed"

export default function Project(props){
    // "YoutubeLink": "And this is the video"
    console.log(props)
    return(
        <div class="flex justify-start items-stretch flex-col h-auto w-11/12 lg:w-5/12 bg-white rounded-xl shadow-xl ">
            {/* Title */}
            <h1 className = "text-nmsu-crimson font-semibold text-2xl pt-5">
                {props.Title}
            </h1>
            {/* Description */}
            <div className="w-full flex justify-start p-5 flex  items-stretch flex-col overflow-auto max-h-80">
                <ProjectField fieldName="Creators" fieldValue={props.Creators}/>
                <ProjectField fieldName="Description" fieldValue={props.Description}/>
                <ProjectField fieldName="ProjectLink" fieldValue={props.ProjectLink}/>
                <YoutubeEmbed embedId={props.YoutubeLink}/>
            </div>



        </div>
    )
}