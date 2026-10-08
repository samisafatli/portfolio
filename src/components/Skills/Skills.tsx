import React from "react";
import { SKILLS_CONSTANTS } from "./constants";
import SkillIcon from "./SkillIcon";
import "./Skills.css";

const Skills: React.FC = () => {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <span className="section-kicker">03 / What I work with</span>
        <h2 className="section-title">{SKILLS_CONSTANTS.sectionTitle}</h2>
        <div className="skills-grid">
          {SKILLS_CONSTANTS.skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{category.category}</h3>
              <div className="skills-list">
                {category.skills.map((skill, i) => (
                  <span key={i} className="skill-tag">
                    <SkillIcon skill={skill} className="skill-tag-icon" />
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
