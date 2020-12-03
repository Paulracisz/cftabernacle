import React from 'react';
import '../css/Header.css';
import Navigation from "./Navigation";
import Logo from '../resources/logo3.png';
import Credit from '../components/Credit';
import Profile1 from "../resources/profile1.jpeg";
import '../css/About.css';
import '../css/Donate.css';
import Profile3 from "../resources/profile3.jpeg";


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
    <h2>About Us</h2>
    <div id="bigbox">
    <div id="onepbox">
      <h2 id="aboutus">At This Church</h2>
      <img id="pro-pic" src={Profile1} alt="bishop" />
      <hr/>
      <ul>
        <li className="period"><p className="abtext">We believe that kingdom principles are the only thing<br/>
        that will guide and educate us through the lives we live.</p></li>

        <li className="period"><p className="abtext">We're intentional and sincere about providing practical tools and <br/>
        resources so that you can encounter God, and leave transformed into his vessel, <br/>
        for his use.</p></li>
        <hr/>
        <h2>We Love God</h2>

        <li className="period"><p className="abtext">We're serious about God, because we love him.</p></li>

        <li className="period"><p className="abtext">Daily, we seek ways to embrace God's love at work in our lives.</p></li>

      </ul>
      <hr/>
        <h2>We Love People</h2>
        <ul>
        <li className="period"><p className="abtext">Our love for <strong>people</strong> - not status, reputation, color, or background 
        <br/>is what makes us who we are.</p></li>

        <li className="period"><p className="abtext">We are united by similarities, and complete by our differences.</p></li>
    </ul>
    <hr/>
      <h2>We Focus On Growth</h2>
      <ul>
        <li className="period"><p className="abtext">We create opportunities for individuals and families,<br/> and mature them in every area of their lives.</p></li>
    </ul>
    <hr />
    <h2>We Live In Community</h2>
    <ul>
        <li className="period"><p className="abtext">Like family, we laugh, cry, celebrate together, supporting and encouraging<br/> each other along this journey of life.</p></li>
    </ul>
    <hr />
    <h2>We Value Relationships</h2>
    <ul>
        <li className="period"><p className="abtext">Above all, a relationship with God is the most important thing.</p></li>
        <li className="period"><p className="abtext">We seek to build relationships with God and each other.</p></li>
        <hr/>
    </ul>
    <h2>Donate</h2>
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
    <div>
      <h2 id="contactus">Contact Us</h2>
      <h2>Have any questions, comments, concerns or even a prayer request? <br/>Fill out this form and Bishop will contact you shortly!<br/> All responses are kept confidential.

      </h2>
      <div id="form-div">
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSe--jIur7nKNZBhLwEc7fQp_G8_STmJ7umfeeca8g2qViW62Q/viewform?embedded=true" width="640" height="962" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
    </div>
    </div>
    <a id="backtt" href="#top">Back To The Top</a>
    </div>
    </div>
    <Credit />
  </div>
  );
}

export default Header;
