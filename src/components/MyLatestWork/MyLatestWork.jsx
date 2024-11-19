import React from "react";
import "./MyLatestWork.css";
import white_arrow from "../../assets/white-arrow.png";
import project1 from "../../assets/project1.png";
import project2 from "../../assets/project2.png";
import project3 from "../../assets/project3.png";

const MyLatestWork = () => {
  return (
    <div className="my-latest-work">
      <h1 className="heading">My Latest Works</h1>
      <div className="my-work">
        <div className="projects" >
          <img src={project1} alt="" />
        </div>
        <div className="projects">
          <img src={project2} alt="" />
        </div>
        <div className="projects">
          <img src={project3} alt="" />
        </div>
      </div>
      <div className="my-work">
        <div className="projects">
          <img
            src="https://greatstack.in/portfolio/assets/project_1-5xYOfh0z.svg"
            alt=""
          />
        </div>
        <div className="projects">
          <img
            src="https://greatstack.in/portfolio/assets/project_1-5xYOfh0z.svg"
            alt=""
          />
        </div>
        <div className="projects">
          <img
            src="https://greatstack.in/portfolio/assets/project_1-5xYOfh0z.svg"
            alt=""
          />
        </div>
      </div>
      <div className="show-more">
        <button>
          Show more <img src={white_arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default MyLatestWork;
