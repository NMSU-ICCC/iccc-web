import './App.css';
import React, {useEffect} from 'react';
import Home from './Components/Home/Home';
import PublicResources from './Components/PublicResources/PublicResources';
import AboutUs from './Components/AboutUs/AboutUs';
import LogIn from './Components/Session/LogIn';
import SignIn from './Components/Session/SignIn';
import MyFiles from './Components/MyFiles/MyFiles';
import LogOut from './Components/Session/LogOut';
import Admin from './Components/Admin/Admin';
import { Routes, Route, useLocation  } from "react-router-dom";
import Menu from './Components/Menu/Menu'
import RequestRestorePassword from './Components/Session/RequestRestorePassword';
import RestorePassword from './Components/Session/RestorePassword';

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
            <Route path="/PublicResources" element={ <PublicResources/>} />
            <Route path="/SignIn" element={ <SignIn/>} />
            <Route path="/LogIn" element={ <LogIn/>} />
            <Route path="/MyFiles" element={ <MyFiles/>} />
            <Route path="/LogOut" element={ <LogOut/>} />
            <Route path="/Admin" element={ <Admin/>} />
            <Route path="/RequestRestorePassword" element={ <RequestRestorePassword/>} />
            <Route path="/RestorePassword" element={ <RestorePassword/>} />
          </Routes>
      </div>

    </div>

  );
}

export default App;
