import React, {Component }  from 'react';
import {GeneralButton} from '../GeneralButton'

export class Repository extends Component{
    render() {
      return (  
        <> 
            <div class="flex justify-center">
                <div
                    class="flex flex-col rounded-lg bg-white shadow-lg dark:bg-neutral-700 md:max-w-xl md:flex-row">
                    <img class="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                            src="https://visualpharm.com/assets/624/Github-595b40b85ba036ed117dc155.svg"
                            alt="Github logotype" />
                    <div class="flex flex-col justify-start p-6">
                        <h5
                            class="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
                            ICCC's Repository
                        </h5>
                        <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                            Most of our projects are stores in git.Many of them are also public.
                            If you don't have access to the repository you wish to see,  and you think you should have access, or 
                            want to work with us in that project, contact a club's officer and ask for help
                        </p>
                    
                        <GeneralButton name="Github" link ="https://github.com/NMSU-ICCC/iccc-website"/>
                    </div>
                </div>
            </div>
            <div class="flex justify-center">
                <div
                    class="flex flex-col rounded-lg bg-white shadow-lg dark:bg-neutral-700 md:max-w-xl md:flex-row">
                    <img class="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                            src="https://1000logos.net/wp-content/uploads/2021/06/Slack-logo.png"
                            alt="Github logotype" />
                    <div class="flex flex-col justify-start p-6">
                        <h5
                            class="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
                            ICCC communication channel(Slack)
                        </h5>
                        <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                           Although the most important messages will be sent by email, 
                           we use our own Slack channel for effective communication.
                           Join and introduce yourself in the general chat!
                        </p>
                    
                        <GeneralButton name="Slack Channel" link ="https://join.slack.com/t/iccc-nmsu/shared_invite/zt-1s7q977io-dKEkhPWxbyYqQ4y6owS6fA"/>
                    </div>
                </div>
            </div>
        </>
      );
    }
  }

