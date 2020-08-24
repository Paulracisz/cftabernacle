import React from 'react';
import '../css/Header.css';
import Navigation from "./Navigation";
import Logo from '../resources/logo3.png';
import Credit from '../components/Credit';


function Header() {
  return (
    <div className="bigbox">
    <h1 className="bigtext">Christian Faith Tabernacle Church</h1>
    <div id="imgbox">
    <img id="logo" src={Logo} alt="the church logo" />
    </div>
    <Navigation/>
    <div id="joinus">
    <h2 className="bigtext">Join us for Church!</h2>
    <div id="livelink">
    <a id="a" href="https://www.facebook.com/profile.php?id=1390404890" target="_blank" rel="noopener noreferrer">Watch Us Live!</a>
    </div>
    </div>
    <div><h2 className="bigtext">10:00 AM Worship With Us <br/>
    <a href="https://www.google.com/maps/place/Christian+Faith+Tabernacle+Church/@42.3787604,-83.0005686,17z/data=!3m1!4b1!4m5!3m4!1s0x8824d3818105dc25:0xe3807e0cab36675a!8m2!3d42.3787604!4d-82.9983799" target="_blank" rel="noopener noreferrer"> 9300 E. Forest, Detroit, MI </a> </h2></div>
    <Credit />
  </div>
  );
}

export default Header;
