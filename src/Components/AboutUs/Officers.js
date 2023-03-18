import React, {Component} from 'react';
import {Officer} from "./Officer";

const officers = [
    ["Manuel Mares", "President", 
        "Masters student of Computer Science. With experience in Python, React, Java, JS, C#, etc.", 
        "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png",
        "manuelms@nmsu.edu"
    ],
    ["Trang Tran", "Vide preseident", 
        "Masters student of Computer Science", 
        "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png",
        ""
    ],
    ["Xindi Zheng", "Secretary", 
        "Student in the Computer Science degree", 
        "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png",
        ""
    ],
    ["Mingfang Zhu", "Treasurer", 
        "Student in the Computer Science degree", 
        "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png",
        ""
    ]
]

export class Officers extends Component{
    render(){
          const profiles = [] 
          for (let i = 0; i< officers.length; i++){
            profiles.push(<Officer name={officers[i][0]} position={officers[i][1]} description={officers[i][2]} image={officers[i][3]} email={officers[i][4]} key={i}/>)
          }
        return(  
            <div class="w-screen h-min-screen h-fit bg-violet-800 flex justify-center items-center flex-col px-20 py-40">
                <p class="text-7xl pb-10 text-white">
                    Officers positions
                </p>
                <div class="flex flex-col sm:grid sm:grid-cols-2 sm:gap-10  sm:h-fit sm:w-fit">          
                    {profiles}
                </div>
            </div>
            
        )
    }
}