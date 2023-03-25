import React, {Component} from 'react';
import {Officer} from "./Officer";


export class WhoAreWe extends Component{
    render(){
        return( 
            <div class="container my-24 px-6 mx-auto">
                <section class="mb-32 text-gray-800">
                    <div class="block rounded-lg shadow-lg bg-white">
                        <div class="flex flex-wrap items-center">
                            <div class="hidden lg:flex grow-0 shrink-0 basis-auto lg:w-6/12 xl:w-4/12">
                                <img src="./NMSU_3.jpg" alt="image3"
                                    class="h-full pl-8 lg:rounded-tr-none lg:rounded-bl-lg" />
                            </div>
                        <div class="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12">
                        <div class="px-6 py-12 md:px-12">
                            <h2 class="text-2xl font-bold mb-4">Become an Officer</h2>
                            <p class="text-gray-500 mb-6">
                            We are actively looking for people to fill new positions and help us improve the club.
                            If you are interesting, send an email to any of the officers expressing your interest.
                            As an officer, you will be able to take part in the creation, planning direction and development
                            of our projects an activities. You can help other members improve their skill at the same time
                            that you improve yours as well as adding a cool achivement for your resume!
                            Moreover, you can have a more active rol deciding what projects to develope.
                            </p>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
                
                </div>
            
        )
    }
}