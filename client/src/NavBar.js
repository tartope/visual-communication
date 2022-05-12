import React from "react";
import { NavLink, useNavigate } from 'react-router-dom';
import './NavBar.css';

function NavBar({ user, setUser }){

    let navigate = useNavigate();

    function handleLogoutClick() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
            if (r.ok) {
                setUser(null);
                navigate("/");
                console.log('logout success')
            alert (`Goodbye!`)
            }
        });
    }

    return(
        <div className="nav-bar" >
            <div className="nav">
                <NavLink exact to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                { user ? <NavLink to="/firstthenboard">First/Then</NavLink> : null }
                { user ? <NavLink to="/tokenreinforcementboard">Token Reinforcement</NavLink> : null }
                {/* <NavLink to="/firstthenboard"> First/Then </NavLink>
                <NavLink to="/tokenreinforcementboard">Token Reinforcement </NavLink> */}
                <NavLink to="/contact"> Contact </NavLink>
                <NavLink to="/login"> Login/Sign Up </NavLink>
                { user ? <button className="logout-btn" onClick={ handleLogoutClick } > Logout </button> : null }
            </div>
        </div>
    )
}


export default NavBar;