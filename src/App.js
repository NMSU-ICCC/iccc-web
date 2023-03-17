import './App.css';
import React from 'react'
import {Home} from './Components/Home/Home'
import {Documents} from './Components/Documents/Documents'
import {AboutUs} from './Components/AboutUs/AboutUs'
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App" >
      <Routes>
        <Route path="/" element={ <Home/>} />
        <Route path="/AboutUs" element={ <AboutUs/>} />
        <Route path="/Documents" element={ <Documents/>} />
        <Route path="/LogIn" element={ <h1>This is the LogIn</h1>} />
      </Routes>
      

    </div>

  );
}

export default App;
