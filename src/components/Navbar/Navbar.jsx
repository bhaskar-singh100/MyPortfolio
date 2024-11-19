import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const [menu, setMenu] = useState("home");

  return (
    <div className={`navbar ${sticky && "dark-nav"} `}>
      <h1>Portfolio</h1>
      <ul className="nav-menu">
        <li>
          <Link
            className={`${menu === "home" ? "active" : ""}`}
            onClick={() => {
              setMenu("home");
            }}
            to="hero"
            smooth={true}
            offset={-120}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className={`${menu === "about" ? "active" : ""}`}
            onClick={() => {
              setMenu("about");
            }}
            to="about"
            smooth={true}
            offset={-150}
            duration={500}
          >
            About me
          </Link>
        </li>

        <li>
          <Link
            className={`${menu === "projects" ? "active" : ""}`}
            onClick={() => {
              setMenu("projects");
            }}
            to="my-latest-work"
            smooth={true}
            offset={-40}
            duration={500}
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link
            className={`${menu === "contact" ? "active" : ""}`}
            onClick={() => {
              setMenu("contact");
            }}
            to="contact"
            smooth={true}
            offset={-150}
            duration={500}
          >
            Contact
          </Link>
        </li>
        <li>
          <button className="btn nav-btn">
            <Link to="contact" smooth={true} offset={0} duration={500}>
              Connect with me
            </Link>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
