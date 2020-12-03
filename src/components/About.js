import React from 'react';
import '../css/About.css';
import Navigation from "./Navigation";
import Profile1 from "../resources/profile1.jpg";



function About() {
  return (
    <>
    <h2>About Us</h2>
    <Navigation/>
    <div id="bigbox">
    <div id="onepbox">
      <h2>At This Church</h2>
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
    <a id="backtt" href="#top">Back To The Top</a>
    </div>
    </div>
    </>
  );
}

export default About;