import './App.css';
import React, {useEffect} from 'react';
import Home from './Components/Home/Home';
import Resources from './Components/Resources/Resources';
import AboutUs from './Components/AboutUs/AboutUs';
import LogIn from './Components/Session/LogIn';
import SignIn from './Components/Session/SignIn';
import MyFiles from './Components/MyFiles/MyFiles';
import LogOut from './Components/Session/LogOut';
import Admin from './Components/Admin/Admin';
import { Routes, Route, useLocation  } from "react-router-dom";
import Menu from './Components/Menu/Menu'

function App() {  
  const location = useLocation();
  useEffect(() => {
  },[location]);

  return (
    <div className="App" >
      <div class="bg-nmsu-white flex justify-start w-screen min-h-screen h-fit  flex-col body-font font-raleway">
        <Menu loggedIn = {sessionStorage.getItem("sessionStarted")} position = {sessionStorage.getItem("position")}/>

          <Routes>
            <Route path="/" element={ <Home/>} />
            <Route path="/AboutUs" element={ <AboutUs/>} />
            <Route path="/Resources" element={ <Resources/>} />
            <Route path="/SignIn" element={ <SignIn/>} />
            <Route path="/LogIn" element={ <LogIn/>} />
            <Route path="/MyFiles" element={ <MyFiles/>} />
            <Route path="/LogOut" element={ <LogOut/>} />
            <Route path="/Admin" element={ <Admin/>} />
          </Routes>
      </div>

    </div>

  );
}

export default App;
