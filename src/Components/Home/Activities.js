import React, {Component} from 'react';
import {Activity} from "./Activity"

const activities = [
  ["Mock Interviews", "Weekly interviews are hosted in realistical environments where you will get familiar with solving techniques and will recieve feedback to improve interviewing skills."],
  ["Deploy applications", "All of our projects have the goal of having real life application, and nothing looks better in your resume that having projects people actually use."],  
  ["Learn Modern Technologies", "React, Git, Firebase, Arduino, Testing... All the things you used in class and never really learnt!"],
  ["Team projects", "Multiple technologies are combined in different ways to create exciting projects. Aditionally, gain experience designing and leading a project."],
  ["Research", "Our club is not limited to producing software projects. We care about quality an innovation. New ideas are encouraged, and tools are provided so you can develop them successfully."],
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
                    
                    ICCC has many activities with focus in gaining real-world experience and build a strong portfolio of projects. 
                    Although most activities are set for group work, they are also designed by considering the needs and preferences of each
                    individual member. 
                    In that way, we make sure every member is included, supported, benefit from, listened to, and that they actively help us 
                    build and improve this club 
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