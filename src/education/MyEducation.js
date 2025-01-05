import React, { useEffect, useRef } from "react";
import "./MyEducation.css";

const MyEducation = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const educationItems = sectionRef.current.querySelectorAll(".education-item");

        educationItems.forEach((item) => {
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

  const educationData = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "ABC University",
      year: "2018 - 2022",
      description: "Focused on software development, data structures, and algorithms.",
    },
    {
      degree: "Intermediate Education",
      institution: "XYZ Junior College",
      year: "2016 - 2018",
      description: "Completed coursework in Mathematics, Physics, and Chemistry.",
    },
    {
      degree: "High School Education",
      institution: "LMN High School",
      year: "2014 - 2016",
      description: "Achieved top marks in science and mathematics.",
    },
  ];

  return (
    <section className="education-section" ref={sectionRef}>
      <h2>Education</h2>
      <div className="education-list">
        {educationData.map((edu, index) => (
          <div key={index} className="education-item">
            <h3>{edu.degree}</h3>
            <p className="institution">{edu.institution}</p>
            <p className="year">{edu.year}</p>
            <p className="description">{edu.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyEducation;
