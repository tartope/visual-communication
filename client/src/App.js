import React, {useEffect, useState } from 'react'
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import FirstThenPage from "./FirstThenPage";
import TokenReinforcementPage from "./TokenReinforcementPage";
import Contact from "./Contact";
import Login from "./Login";
// import LoginForm from "./LoginForm";
import './App.css';

function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  return (
    <div className="App">
      <NavBar user={user} setUser={setUser} />
          <Routes>
                <Route exact path ="/" element= { <Home /> } /> 
                <Route path ="/about" element= { <About  /> } /> 
                <Route path="/firstthenboard" element= { <FirstThenPage /> } /> 
                <Route path="/tokenreinforcementboard" element= { <TokenReinforcementPage /> } />
                <Route path="/contact" element= { <Contact /> } />
                <Route path ="/login" element= { <Login setUser={setUser} /> } />
          </Routes>
    </div>
  );
}

export default App;
