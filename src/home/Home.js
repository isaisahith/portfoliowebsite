import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="homepage">
      <section className="about-section" id="about">
        <div className="about-content">
          <h1>Sai Sahith Inakota</h1>
          <p>Full stack developer | Java | Spring Boot | Hibernate | MySQL | React | JavaScript</p>
          <p className='aboutme'>I am a Full Stack Developer with 4 years of experience specializing in building scalable web applications. My expertise includes React, JavaScript, TypeScript, HTML, CSS on the frontend and Java, Spring Boot, Hibernate, MySQL on the backend. I enjoy creating efficient, user-friendly solutions and continuously improving my skills to stay ahead in the ever-evolving tech landscape. 🚀</p>
        </div>
        <div className="about-image">
          <img src="./hero.jpg" alt="Curious designer" />
        </div>
      </section>
    </div>
  );
};

export default Home;
