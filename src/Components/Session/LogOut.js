import react, {} from 'react'
import { useNavigate  } from "react-router-dom";


export default function LogOut(){    
    const EndSession = (e) => {
        sessionStorage.setItem("sessionStarted", false);
        navigate("/")
    }
    const navigate = useNavigate();

    return(
        <div class="pt-40">
            <button onClick={(e) => {EndSession()}}>
                Log out
            </button>
        </div>
    )
}