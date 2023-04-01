import './App.css';
import React from 'react';
import {Home} from './Components/Home/Home';
import {Resources} from './Components/Resources/Resources';
import {AboutUs} from './Components/AboutUs/AboutUs';
import LogIn from './Components/MyFiles/LogIn';
import SignIn from './Components/SignIn/SignIn';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App" >
      <Routes>
        <Route path="/" element={ <Home/>} />
        <Route path="/AboutUs" element={ <AboutUs/>} />
        <Route path="/Resources" element={ <Resources/>} />
        <Route path="/MyFiles" element={ <LogIn/>} />
        <Route path="/SignIn" element={ <SignIn/>} />
      </Routes>
      

    </div>

  );
}

export default App;
