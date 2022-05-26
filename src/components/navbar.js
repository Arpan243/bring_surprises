import React from "react";
import "./navbar.css";
import logo from "./logo.png";
// import {NavLink as Link} from 'react-router-dom';

const navbar = () => {
  return (
    <header data-aos="fade-right">
      <img src={logo} className="logo" alt="logo" />
      <div className="gap"></div>

      <a href="https://www.google.com/" className="box1">
        About Us
      </a>

      <a href="https://www.google.com/" className="box2">
        Our Services
      </a>

      <a href="https://www.google.com/" className="box3">
        Image Gallery
      </a>
    </header>
  );
};

export default navbar;
