import React from "react";
import "./Hero.css";
import my_img from "../../assets/Bhaskar.png";
const Hero = () => {
  return (
    <div className="hero">
      <img src={my_img} alt="" className="my-img" />
      <h1 className="color-text">I'm Bhaskar Singh,</h1>
      <h1>frontend developer.</h1>
      <p>
        I am a frontend developer from California, USA with 10 years of
        experience in multiple companies like Microsoft, Tesla and Apple.
      </p>
      <button className="btn"><a href="../..Bhaskar_resume.pdf" download></a> My Resume</button>
    </div>
  );
};

export default Hero;
