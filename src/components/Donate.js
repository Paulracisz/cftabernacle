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
      <div id="donatebox">
      <div id="paypalbox">
        <details id="paypaldetails"><summary id="paypalsum">Paypal</summary><p >Donations via PayPal<br/> can be made to <strong>Christianfaithtab@gmail.com</strong></p></details>
      </div>
      <div id="cashappbox">
      <details id="cashappdetails"><summary id="cashappsum">CashApp</summary><p>Donations via CashApp<br/> can be made to <strong>$Ctfchurch9300</strong></p></details>
      </div>
      <div id="mailinbox">
      <details id="mailindetails"><summary id="mailinsum">Mail-In</summary><p>Donations via Mail-In <br/>can be made to <strong>9300 E. Forest, Detroit, MI</strong></p></details>
      </div>
      </div>

    </div>
    </>
  );
}

export default Donate;