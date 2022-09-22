import React from "react";
import { image } from "../data/data";

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>We've been trying to contact you about your car's extended warranty</p>
      <img src={image} alt={"I made this"}></img>
    </div>
  ) 
}

export default About;
