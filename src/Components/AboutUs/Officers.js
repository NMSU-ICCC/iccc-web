import React, {Component} from 'react';
import {Officer} from "./Officer";


export default function Officers(){
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
    const profiles = [] 
    for (let i = 0; i< officers.length; i++){
    profiles.push(<Officer name={officers[i][0]} position={officers[i][1]} description={officers[i][2]} image={officers[i][3]} email={officers[i][4]} key={i}/>)
    }
    
    return(              
        <div className="bg-white py-24 sm:py-32 rounded-lg shadow-lg md:mt-20 ">
            <div className="mx-auto grid max-w-7xl gap-y-20 gap-x-8 px-6 lg:px-8 xl:grid-cols-3">
                <div className="max-w-2xl">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our leadership</h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                    Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper
                    suspendisse.
                </p>
                </div>
                <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                    {profiles}
                </ul>
            </div>
        </div>            
    )
}








// const people = [
//     {
//       name: 'Leslie Alexander',
//       role: 'Co-Founder / CEO',
//       imageUrl:
//         'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     },
//     // More people...
//   ]
  
//   export default function Officers() {
//     return (
//       <div className="bg-white py-24 sm:py-32">
//         <div className="mx-auto grid max-w-7xl gap-y-20 gap-x-8 px-6 lg:px-8 xl:grid-cols-3">
//           <div className="max-w-2xl">
//             <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our leadership</h2>
//             <p className="mt-6 text-lg leading-8 text-gray-600">
//               Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper
//               suspendisse.
//             </p>
//           </div>
//           <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            
//           </ul>
//         </div>
//       </div>
//     )
//   }