import emailjs from 'emailjs-com';
import {getUser} from "../../firebase";
import $ from 'jquery'; 
import { Link } from "react-router-dom";

export default function RequestRestorePassword(){
    

    function sendEmail(e) {
        let email = document.getElementById("email").value;
        getUser(email)
            .then((user) => {
                
                if(!user){
                    document.getElementById('errorMessage').innerHTML = "Invalid email"
                    return;
                }
                document.getElementById('errorMessage').innerHTML = ""

                let name = user.name
                let code = user.passwordRecoveryCode
                let email = user.email
                var data = {
                    service_id: "ICCC-notifications",
                    template_id: "template_iz80ize",
                    user_id: 'iLK1WLNhc0w7ngKGL',
                    template_params: {
                        to_name: name,
                        message: code,
                        to_email: email,
                    }
                };
                 
                $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
                    type: 'POST',
                    data: JSON.stringify(data),
                    contentType: 'application/json'
                }).done(function() {
                    document.getElementById('errorMessage').innerHTML = "Email sent! This might take a couple of minutes. Don't forget to check your spam folder and check the link to enter the code at the bottom"
                }).fail(function(error) {
                    document.getElementById('errorMessage').innerHTML = "Error sending the code"
                });


            })
    }


    return(
        <div className='bg-nmsu-white flex justify-center items-center w-screen h-fit flex-col py-40'>
            <div className=" flex flex-col justify-around items-center bg-white shadow-xl rounded-lg p-10 w-screen h-fit sm:w-10/12 md:w-5/12">
                <h1 className='text-3xl pb-10 text-nmsu-crimson font-semibold'>
                    Reset your password
                </h1>
                <div class="w-60 h-auto">
                    <img class="h-full pl-8 lg:rounded-tr-none lg:rounded-bl-lg" src="./lost.svg" alt="become-an-officer"/>     
                </div>
                
                <p className='text-red-700' id="errorMessage">
                    
                </p>

                <div class="flex flex-col items-start w-full mt-10">
                    <p class="text-xl font-semibold mb-2">
                        Email:
                    </p>
                    <input class=" border-b-2 border-nmsu-crimson w-full px-3 outline-nmsu-crimson"   id="email" ></input>
                </div>

                {/* input user password */}
                <button class="bg-nmsu-crimson text-white font-bold py-2 w-full rounded-md my-10"
                onClick={sendEmail}  >
                    Send reset code
                </button>

                {/* link to reset password */}
                <div class="flex  flex-col justify-start items-start w-full h-fit my-10">
                    <Link to="/RestorePassword" class=" bg-transparent outline-none border-0 text-nmsu-crimson font-bold ">
                        I have a code
                    </Link>
                </div>


            </div>
        </div>
    )
}