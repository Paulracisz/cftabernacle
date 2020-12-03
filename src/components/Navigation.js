import React from 'react';
import "../css/Navigation.css"
import { NavLink } from 'react-router-dom';

function Navigation() {
    return (
<div id="menu">
    <a href="#top" className="menui">Home</a>
    <a href="#aboutus" className="menui">About Us</a>
    <a href="#donate" className="menui">Donate</a>
    <a href="#contactus" className="menui">Contact</a>
    </div>
    );
}

export default Navigation;