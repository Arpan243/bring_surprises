import React from "react";
import "./navbar.css";
import logo from "./logo.png";
import { Link } from "react-router-dom";
// import {NavLink as Link} from 'react-router-dom';

export const Navbar = () => {
  return (
    <header data-aos="fade-right">
      <img src={logo} className="logo" alt="logo" />
      <div className="gap"></div>

      {/* <a href="https://www.google.com/" className="box1">
        About Us
      </a> */}
      <Link to='/About' className="box1">About Us</Link>

      {/* <a href="https://www.google.com/" className="box2">
        Our Services
      </a> */}
      <Link to='/Services' className="box2">Our Services</Link>

      {/* <a href="https://www.google.com/" className="box3">
        Image Gallery
      </a> */}
      <Link to='/Gallery' className="box3">Image Gallery</Link>
    </header>
  )
}
