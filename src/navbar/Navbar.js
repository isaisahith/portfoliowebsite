import React from 'react';
import { Link } from 'react-scroll'; // For smooth scrolling to sections
import './Navbar.css';
import Home from '../home/Home';
import Skills from '../skills/Skills';
import MyEducation from '../education/MyEducation';
import Projects from '../projects/Projects';
import ContactMe from '../contactme/ContactMe';

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
        <li><Link to="edu" smooth={true} duration={500}>My Education</Link></li>
        <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
        <li><Link to="contactme" smooth={true} duration={500}>Contact Me</Link></li>
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

    <div id='edu'>
      <MyEducation/>
    </div>
    <div id='projects'>
      <Projects/>
    </div>

    <div id='contactme'>
      <ContactMe/>
    </div>

    </>
  );
};

export default Navbar;
