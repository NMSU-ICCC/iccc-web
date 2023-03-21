import React, {Component} from 'react';
import {Activity} from "./Activity"

const activities = [
  ["Mock Interviews", "Weekly interviews are hosted in realistical environments where you will get familiar with solving techniques and will recieve feedback to improve interviewing skills."],
  ["Deploy applications", "All of our projects have the goal of having real life application, and nothing looks better in your resume that having projects people actually use."],  
  ["Learn Modern Technologies", "React, Git, Firebase, Arduino, Testing... All the things you used in class and never really learn! To help you being a successful developer, we make sure you learn new and relevant technologies."],
  ["Team projects", "Multiple technologies are combined in different ways to create exciting projects. The multidisciplinary will allow you to get familiar with new areas of development and to learn how to integrate in a team before you graduate."],
  ["Research", "Our club is not limited to producing software projects. We care about quality an innovation. New ideas are encouraged to be developed and tools are provided so you can develop them successfully."],
]

export class Activities extends Component{
    render() {
      const acts = []
      for (let i = 0; i< activities.length; i++){
        acts.push(<Activity activity={activities[i][0]} description={activities[i][1]} key={i}/>)
      }

      return (   
        <div class="bg-[url('Resources/Images/background.png')] py-5">
          <div class="container my-24 px-6 mx-auto bg-black opacity-70 text-white pt-10">

          <section class="mb-32">
              <div class="flex justify-center">
              <div class="text-center max-w-[700px]">
                  <h2 class="text-3xl text-blue-600  font-bold mb-6">What do we do?</h2>
                  <p class=" mb-12">
                    ICCC has many different activities to adapt to different members. The activities are design with focus in 
                    gaining real-world experience and build a strong portfolio of projects. Although the activities are adapted
                    to the needs of every member individually, we make sure they are compatible with other members' activities. 
                    In that way, we make sure every member is included, supported, listened to, and that they actively help us 
                    build ICCC 
                  </p>
              </div>
              </div>

              <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-x-6 xl:gap-x-12">
                {acts}
              </div>
          </section>

          </div>
      </div>
      );
    }
}