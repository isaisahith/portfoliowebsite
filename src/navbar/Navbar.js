import React from 'react';
import { Link } from 'react-scroll'; // For smooth scrolling to sections
import './Navbar.css';
import Home from '../home/Home';
import Skills from '../skills/Skills';

const Navbar = () => {
  return (
    <>
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/logo.png" alt="Logo" />
      </div>
      <ul className="navbar-links">
        <li><Link to="home" smooth={true} duration={500}>About</Link></li>
        <li><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
        <li><Link to="portfolio" smooth={true} duration={500}>Portfolio</Link></li>
        <li><Link to="blog" smooth={true} duration={500}>Blog</Link></li>
        <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
      </ul>
      <div className="navbar-icons">
        <a href="#"><i className="fab fa-twitter"></i></a>
        <a href="#"><i className="fab fa-linkedin"></i></a>
        <a href="#"><i className="fab fa-facebook"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
      </div>
    
    </nav>

    <div id='home'>
    <Home/>
    </div>
    <div id='skills'>
    <Skills/>
    </div>

    </>
  );
};

export default Navbar;
