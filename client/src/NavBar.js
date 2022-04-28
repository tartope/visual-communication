import React from "react";
import { NavLink } from 'react-router-dom';
import './NavBar.css';

function NavBar(){

    return(
        <div className="nav-bar" >
            <div className="nav">
                <NavLink exact to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/firstthenboard"> First/Then </NavLink>
                <NavLink to="/tokenreinforcementboard">Token Reinforcement </NavLink>
                <NavLink to="/contact"> Contact </NavLink>
            </div>
        </div>
    )
}


export default NavBar;