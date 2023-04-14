export default function AdminResource(props){
    return(
        <div class="flex flex-row items-center justify-between bg-white shadow-xl rounded-lg my-4 p-2 w-full px-6">
            {/* <iframe src={props.title}/> */}
            <p class="text-md font-bold">
                {props.title}
            </p>
            <p class="text-md font-bold overflow-hidden flex-nowrap">
                {props.url}
            </p>
            <button class="text-red-500 font-extrabold">
                x
            </button>

        </div>
    )
}