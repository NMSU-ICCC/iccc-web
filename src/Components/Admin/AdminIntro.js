export default function AdminIntro(){
    return(
        //large: row, medium, small: col
        <div class="w-full min-h-screen h-fit bg-white flex flex-col justify-center items-center p-20 md:flex-row ">
            {/* left side, two panels */}
            <div class="w-full h-full flex flex-col p-10 md:w-6/12">
                <h1 class="text-black font-semi text-5xl py-20 body-font font-raleway">
                    Welcome to the admin page
                </h1>
                <p class="body-font font-raleway">
                  This space allows you to manage the content for other users.
                  There you can see all the members and provided with update on the resources you and they need.
                  Please be responsible.  
                </p>
            </div>
            
            {/* left section - image */}            
            <img class="h-full md:w-6/12 " src="./undraw_counting_stars_re_smvv.svg" alt="Git-cheat-code"/>
        </div>
    )
}