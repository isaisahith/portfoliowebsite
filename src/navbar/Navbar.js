import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/logo.png"/>
      </div>
      <ul className="navbar-links">
        <li><a href="#about">About</a></li>
        <li><a href="#learn">learn</a></li>
        <li><a href="#portfolio">portfolio</a></li>
        <li><a href="#blog">blog</a></li>
        <li><a href="#contact">contact</a></li>
      </ul>
      <div className="navbar-icons">
        <a href="#"><i className="fab fa-twitter"></i></a>
        <a href="#"><i className="fab fa-linkedin"></i></a>
        <a href="#"><i className="fab fa-facebook"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
      </div>
    </nav>
  );
};

export default Navbar;
