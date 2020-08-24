import React from 'react';
import '../css/Donate.css';
import Navigation from "./Navigation";
import Profile3 from "../resources/profile3.jpeg";


function Donate() {
  return (
    <>
    <h2>Donate</h2>
    <Navigation/>
    <div id="donate">
      <h2> 3 Ways To Give!</h2>
      <img id="pro-pic" src={Profile3} alt="the bishop"/>
    </div>
    </>
  );
}

export default Donate;