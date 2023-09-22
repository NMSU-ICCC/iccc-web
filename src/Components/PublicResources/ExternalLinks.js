import { useState, useEffect } from "react"
import ExternalLinkCard from "./ExternalLinkCard";

export default function ExternalLinks(){    
  let externalLinks = [
    {
      "link":"https://forms.gle/XqA2xs4gAUfAJ35a6",
      "icon":"https://gsb.hse.ru/pubs/share/direct/408305373.png",
      "alternativeText": "Mock_interviews",
      "buttonText":"Mock Interviews",
      "description":"Improve your skills with tailored mock interview!"
    },
    {
      "link":"https://join.slack.com/t/iccc-nmsu/shared_invite/zt-1s7q977io-dKEkhPWxbyYqQ4y6owS6fA",
      "icon":"https://1000logos.net/wp-content/uploads/2021/06/Slack-logo.png",
      "alternativeText": "Slack",
      "buttonText":"Slack",
      "description":"Although the most important messages will be sent by email, we use slack for quick constant communication with our members.Join and introduce yourself in the general chat!"
    },
    {
      "link":"https://github.com/NMSU-ICCC/iccc-website",
      "icon":"https://visualpharm.com/assets/624/Github-595b40b85ba036ed117dc155.svg",
      "alternativeText": "Github",
      "buttonText":"Github",
      "description":"Most of our projects are stores in git.Many of them are also public. If you don't have access to the repository you wish to see,  and you think you should have access, or want to work with us in that project, contact a club's officer and ask for help"
    }
  ]
  const [links, setLinks] = useState(null);
  useEffect(() => {
      let linksArray = []
      for (let index = 0; index < externalLinks.length; index++) {
        let l = externalLinks[index];
        console.log(externalLinks[index])
        linksArray.push( <ExternalLinkCard link={l["link"]} icon={l["icon"]} alternativeText={l["alternativeText"]} buttonText={l["buttonText"]} description={l["description"]}/> );            
      }
      setLinks(linksArray)
      console.log(linksArray)
  }, [])

  return(
      
    <div class="flex justify-center items-center flex-col w-screen min-h-screen h-fit  ">
        <h1 class="text-7xl my-5">
            What's up at ICCC?
        </h1>
        <p class="text-3xl px-5 md:px-20">
            Stay in touch with the members at ICCC and keep track of our projects with the following links:
        </p>
        <div class="flex flex-wrap justify-around items-center w-screen h-fit flex-col  ">
            {links}
        </div>
    </div>
  )
  


}