import Project from "./Project"

export default function Projects(){
    let project = {
        "Project1" : {
            "Title": "title 1",
            "Creators": "MeMEMEMEME",
            "Description": "liykutjyrhbgvfsdca",
            "ProjectLink": "this is the link",
            "YoutubeLink": "X8ipUgXH6jw"
        },
        "Project2" : {
            "Title": "title 1 this is the title for the second project",
            "Creators": "MeMEMEMEMEasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasd",
            "Description": "liykutjyrhbgvfsdca and beverfeasdfasdf aefqwerqwefasdfasdf asdfasdfasdfasdaf",
            "ProjectLink": "this is the link asdfasd fis a very long description that might take mw somewhere but I am not sure about it yet, so lets see what happends next",
            "YoutubeLink": "X8ipUgXH6jw"
        },
        "Project13" : {
            "Title": "title 1",
            "Creators": "MeMEMEMEME",
            "Description": "liykutjyrhbgvfsdca",
            "ProjectLink": "this is the link",
            "YoutubeLink": "X8ipUgXH6jw"
        },
        "Project4" : {
            "Title": "title 1",
            "Creators": "MeMEMEMEME",
            "Description": "liykutjyrhbgvfsdca",
            "ProjectLink": "this is the link",
            "YoutubeLink": "X8ipUgXH6jw"
        },
        "Project6" : {
            "Title": "title 1",
            "Creators": "MeMEMEMEME",
            "Description": "liykutjyrhbgvfsdca",
            "ProjectLink": "this is the link",
            "YoutubeLink": "X8ipUgXH6jw"
        },
    }

    // const [projects]
    return(
        <div className="w-screen px-0 lg:px-20">
            <h1 className="text-iccc-red font-extrabold text-6xl pt-32 pb-16">
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