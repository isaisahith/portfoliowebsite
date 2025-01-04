import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="homepage">
      <section className="about-section">
        <div className="about-content">
          <h1>Sai Sahith Inakota</h1>
          <p>
            Full stack developer | Java | Spingboot | Hibernate | Mysql | React | JavaScript
          </p>
          <p>
            Since 2005, I've enjoyed turning complex problems into simple, beautiful, and intuitive designs. 
            When I'm not pushing pixels, you'll find me cooking, gardening, or working out in the park.
          </p>
        </div>
        <div className="about-image">
          <img
            src="/hero.jpg"
            alt="Curious designer"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
