import React, {Component} from 'react';
import {Activity} from "./Activity"

const activities = [
  ["Mock Interviews", "weekly interviews to practice problems an gain confidence"],
  ["Team projects", "Large projects"],
  ["Research", "Possibility of publishing"],
  ["Learn Modern Technologies", "React, Git, etc."],
  ["Deploy applications", "Get real experience with real applications"],  
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
                  In the International Collaborative Coding Club, we have many differente activities that adapt to each member.
                  The activities are design with the focus of gain real-world experience and help you build a strong portfolio.
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