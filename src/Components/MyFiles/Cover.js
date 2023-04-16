export default function Cover(){
    return(
        //large: row, medium, small: col
        <div class="w-full min-h-screen h-fit bg-white flex flex-col justify-center items-center p-20 md:flex-row ">
            
            {/* left section - image */}            
            <img class="h-full md:w-6/12 " src="./undraw_online_articles_re_yrkj.svg" alt="Git-cheat-code"/>

            {/* left side, two panels */}
            <div class="w-full h-full flex flex-col p-10 md:w-6/12">
                <h1 class="text-black font-semi text-5xl py-20 body-font font-raleway">
                    Welcome to My Files section
                </h1>
                <p class="body-font font-raleway">
                  Useful resources for many technologies and from all projects at ICCC.
                  These resources are design to start working inmediately, without deeping in the concepts
                  but providing the necessary basis and paths to keep discovering concepts and facing posible problems.
                </p>
            </div>
            
        </div>
           
    )
}