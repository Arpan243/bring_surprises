import React from 'react'
import "./navbar.css"
import logo from "./logo.png";

const navbar = () => {
  return (
    <header >
    <img src={logo} className="logo" alt='logo' />
    <div className="gap"></div>

    <button onclick="window.location.href ='https://www.google.com/'" className="box1">
      About Us
    </button>
    <button onclick="window.location.href = 'https://www.google.com/'" className="box2">
      Our Services
    </button>
    <button onclick="window.location.href = 'https://www.google.com/'" className="box3">
      Image Gallery
    </button>
  </header>
  )
}

export default navbar