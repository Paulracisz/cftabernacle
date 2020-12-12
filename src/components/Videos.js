
import React, { Component } from 'react';
import Movie from "../resources/movie.mp4"
import "../css/About.css"

export default class MyCarousel extends Component {
  render() {
    return (
<video id="videoBox" width="440" height="440" autPlay controls>
<source src={Movie} type="video/mp4"/>
Your browser does not support the video tag.
</video>
      );
    }
}