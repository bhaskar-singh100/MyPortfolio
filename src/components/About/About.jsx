import React from "react";
import "./About.css";
import my_img from "../../assets/Bhaskar.png";

const About = () => {
  return (
    <div className="about-me">
      <h1 className="heading">About Me</h1>
      <div className="about">
        <img src={my_img} alt="" />
        <div className="textandskill">
          <div className="text">
            <p>
              I am an experienced Frontend Developer with over a decade of
              professional expertise in the field. Throughout my career, I have
              had the privilege of collaborating with prestigious organizations,
              contributing to their success and growth.
            </p>
            <p>
              My passion for frontend development is not only reflected in my
              extensive experience but also in the enthusiasm and dedication I
              bring to each project.
            </p>
          </div>
          <div className="skills">
            <div className="skill">
              <h3>HTML & CSS </h3>
              <div className="html-css skill-level"></div>
            </div>
            <div className="skill">
              <h3>JavaScript</h3>
              <div className="js skill-level"></div>
            </div>
            <div className="skill">
              <h3>React JS</h3>
              <div className="react skill-level"></div>
            </div>
            <div className="skill">
              <h3>C++</h3>
              <div className="cpp skill-level"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>10+</h1>
          <p>PROJECTS</p>
        </div>
        <div className="lines"></div>
        <div className="about-achievement">
          <h1>100+</h1>
          <p>PROBLEMS SOLVED</p>
        </div>
        <div className="lines"></div>
        <div className="about-achievement">
          <h1>10+</h1>
          <p>CERTIFICATES</p>
        </div>
      </div>
    </div>
  );
};

export default About;
