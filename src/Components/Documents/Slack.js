import React, {Component }  from 'react';
import {GeneralButton} from '../GeneralButton'

export class Slack extends Component{
    render() {
      return (  
            <div class="flex justify-center mt-5">
                <div
                    class="flex flex-col rounded-lg bg-white shadow-lg dark:bg-neutral-700 md:max-w-xl md:flex-row">
                    <img class="h-full w-full rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                            src="https://1000logos.net/wp-content/uploads/2021/06/Slack-logo.png"
                            alt="Github logotype" />
                    <div class="flex flex-col justify-start p-6">
                        <h5
                            class="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
                            ICCC communication channel(Slack)
                        </h5>
                        <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                           Although the most important messages will be sent by email, 
                           we use slack for quick constant communication with our members.
                           Join and introduce yourself in the general chat!
                        </p>
                    
                        <GeneralButton name="Slack Channel" link ="https://join.slack.com/t/iccc-nmsu/shared_invite/zt-1s7q977io-dKEkhPWxbyYqQ4y6owS6fA"/>
                    </div>
                </div>
            </div>
      );
    }
  }

