export default function Link(props){
    return(
        <div class="w-full h-fit p-2"> 
            <a href={props.url} class="w-full h-full flex items-start justify-start text-xl font-semi">{props.title}</a>
        </div>
    )
}