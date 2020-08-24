import React from 'react';
import "../css/Navigation.css"
import { NavLink } from 'react-router-dom';

function Navigation() {
    return (
<div id="menu">
    <NavLink to="/" className="menui">Home</NavLink>
    <NavLink to="/aboutus" className="menui">About Us</NavLink>
    <NavLink to="/donate" className="menui">Donate</NavLink>
    <NavLink to="/contactus" className="menui">Contact</NavLink>
    </div>
    );
}

export default Navigation;