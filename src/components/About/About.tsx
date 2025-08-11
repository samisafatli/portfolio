import React from "react";
import { ABOUT_CONSTANTS } from "./constants";
import "./About.css";

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">{ABOUT_CONSTANTS.sectionTitle}</h2>
        <div className="about-content">
          <div className="about-text">
            {ABOUT_CONSTANTS.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          <div className="about-stats">
            {ABOUT_CONSTANTS.stats.map((stat, index) => (
              <div key={index} className="stat">
                <h3>{stat.number}</h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
