import React, { useEffect, useRef } from "react";
import "./Experience.css";

const Experience = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const experienceItems = sectionRef.current.querySelectorAll(".experience-item");

        experienceItems.forEach((item) => {
          const itemTop = item.getBoundingClientRect().top;
          const windowHeight = window.innerHeight;

          if (itemTop < windowHeight * 0.8) {
            item.classList.add("visible");
          }
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const experienceData = [
    {
      role: "Software Engineer",
      company: "Capgemini",
      year: "2024 - Present",
      description: "Worked in both frontend and backend development. On the frontend, I have built React-based web applications using HTML5, JavaScript, TypeScript, and CSS, optimizing performance with lazy loading and efficient rendering. On the backend, I have worked with Java, Spring Boot, Hibernate, and MySQL, developing scalable and secure REST APIs. I have experience in handling large datasets, integrating third-party libraries, and ensuring seamless communication between the frontend and backend. Following Agile methodologies, I collaborate with teams to deliver high-quality, maintainable solutions that meet industry standards.",
    },
    {
      role: "Frontend Developer",
      company: "Infosys",
      year: "2020 - 2024",
      description: "I developed a React-based web application using HTML5, JavaScript, React.js, and CSS, ensuring efficient performance with Webpack build tools and unit testing. I worked with large data sets, optimizing rendering and implementing lazy loading for better user experience. My focus was on creating high-quality, reusable components, integrating third-party React libraries, and following best practices in component lifecycle management. I also collaborated with senior team members to upgrade the website as per industry standards and followed Agile methodologies throughout the development process.",
    },
    
  ];

  return (
    <section className="experience-section" ref={sectionRef}>
      <h2>Experience</h2>
      <div className="experience-list">
        {experienceData.map((exp, index) => (
          <div key={index} className="experience-item">
            <h3>{exp.role}</h3>
            <p className="company">{exp.company}</p>
            <p className="year">{exp.year}</p>
            <p className="description">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
