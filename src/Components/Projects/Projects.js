import Project from "./Project"

export default function Projects(){
    let project = {
        "BartenderAPI" : {
            "Title": "Bartender API",
            "Creators": "Trang Tran, Xindi Zheng, Manuel Mares",
            "Technologies": ["ReactJs", "React Routing", "Vite", "Axios", "Tailwind", "Firebase"],
            "Description": "This drink's recipes explorer not only allows you to find you favorite drinks by name, but also to discover new options given the ingredients and by its flavor! Music: bensound.com License code: IXDEHBMU86UJWTZM",
            "ProjectLink": "https://bartender-iccc.web.app/",
            "YoutubeLink": "0pYBJzUATOU"
        },
    }

    // const [projects]
    return(
        <div className="w-screen px-0 py-10 lg:px-20">
            <h1 className="text-iccc-red font-extrabold text-6xl py-16">
                Our Projects
            </h1>
            <div className="flex gap-5 flex-wrap items-stretch justify-around ">
                {   
                    Object.values(project).map((projectVal) => {
                        console.log(projectVal)
                        return <Project {...projectVal} />
                    })
                }
            </div>
        </div>
    )
}