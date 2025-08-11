import React from "react";
import { SKILLS_CONSTANTS } from "./constants";
import "./Skills.css";

const Skills: React.FC = () => {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">{SKILLS_CONSTANTS.sectionTitle}</h2>
        <div className="skills-grid">
          {SKILLS_CONSTANTS.skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{category.category}</h3>
              <div className="skills-list">
                {category.skills.map((skill, i) => (
                  <span key={i} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
