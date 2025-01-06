import React, { useEffect, useState } from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";
import "./ContactMe.css";

const ContactMe = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector(".contact-me-section");
      const sectionTop = section?.getBoundingClientRect().top;
      const triggerPoint = window.innerHeight - 150;
      if (sectionTop < triggerPoint) {
        setAnimate(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`contact-me-section ${animate ? "animate" : ""}`}>
      <h2 className="contact-me-title">Contact Me</h2>
      <p className="contact-me-description">
        Feel free to connect with me on any of these platforms! ✨
      </p>
      <div className="social-icons">
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="icon linkedin"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="icon github"
        >
          <FaGithub />
        </a>
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="icon twitter"
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="icon instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="mailto:your.email@example.com"
          className="icon email"
        >
          <FaEnvelope />
        </a>
      </div>
    </div>
  );
};

export default ContactMe;
