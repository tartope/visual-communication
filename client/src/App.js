import React from 'react'
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import FirstThenBoard from "./FirstThenBoard";
import TokenReinforcementBoard from "./TokenReinforcementBoard";
import Contact from "./Contact";
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
          <Routes>
                <Route exact path ="/" element= { <Home /> } /> 
                <Route path ="/about" element= { <About  /> } /> 
                <Route path="/firstthenboard" element= { <FirstThenBoard /> } /> 
                <Route path="/tokenreinforcementboard" element= { <TokenReinforcementBoard /> } />
                <Route path="/contact" element= { <Contact /> } />
          </Routes>
    </div>
  );
}

export default App;
