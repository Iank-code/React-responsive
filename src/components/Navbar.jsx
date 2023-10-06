import React from "react";
import "./navbar.css"
import {NavLink} from "react-router-dom"
function Navbar() {
    return(
        <div className="navbar">
            <NavLink to="/">Home</NavLink>
            <div className="nav-auth">
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/register">Register</NavLink>
            </div>
        </div>
    )
}

export default Navbar;
