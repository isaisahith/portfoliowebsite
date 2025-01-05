import React, { useEffect, useRef, useState } from "react";
import "./Projects.css";

const Projects = () => {
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const handleScroll = () => {
    if (!hasAnimated && sectionRef.current) {
      const sectionTop = sectionRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (sectionTop < windowHeight * 0.75) {
        setHasAnimated(true);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasAnimated]);

  const projects = [
    {
      name: "Bookmyshow Frontend",
      description:
        "A fully functional movie ticket booking frontend, built using React, JavaScript, CSS, and Bootstrap. Features include dynamic movie listings, filters, and responsive design.",
      link: "https://github.com/isaisahith/bookmyshow",
    },
    {
      name: "Bookmyshow Backend",
      description:
        "Backend services for movie ticket booking. Developed with Java, Spring Boot, JPA, Hibernate, and MySQL. Handles authentication, movie data APIs, and booking logic.",
      link: "https://github.com/isaisahith/bookmyshow_backend",
    },
    {
      name: "Parking Lot Backend",
      description:
        "A backend service for managing parking lot operations. Built with Java and includes features like slot allocation, vehicle tracking, and rate calculations.",
      link: "https://github.com/isaisahith/parkinglot",
    },
    {
      name: "Tic Tac Toe Backend",
      description:
        "A classic Tic Tac Toe game backend developed using Java. Includes game logic, player tracking, and API for multiplayer gameplay.",
      link: "https://github.com/isaisahith/TitcTacToe",
    },
    {
      name: "Snake and Ladders Game",
      description:
        "An interactive Snake and Ladders game built using Java. Includes dice roll simulation, player turns, and game progress tracking.",
      link: "https://github.com/isaisahith/snakeandladders",
    },
  ];

  return (
    <section
      className={`projects-section ${hasAnimated ? "visible" : ""}`}
      ref={sectionRef}
    >
      <h2 className="projects-title">Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card"
            style={{
              animationDelay: `${index * 0.3}s`,
            }}
          >
            <h3 className="project-name">{project.name}</h3>
            <p className="project-description">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
