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
      degree: "Bachelor of Technology in Civil Engineering",
      institution: "ABC University",
      year: "2018 - 2022",
      description: "Graduated with a CGPA of 8.1/10.0, building a strong foundation in civil engineering principles and practices.",
      
    },
    {
      degree: "Intermediate Education",
      institution: "Narayana Junior College",
      year: "2015 - 2019",
      description: "Stood first in the college with 98% marks in science stream.",
    },
    {
      degree: "High School Education",
      institution: "Priyadharshini High School",
      year: "2004 - 2013",
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
