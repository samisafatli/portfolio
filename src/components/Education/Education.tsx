import { useLanguage } from "../../Language";
import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { EDUCATION_CONSTANTS } from "./constants";
import "./Education.css";

const Education: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section id="education" className="education">
      <div className="container">
        <span className="section-kicker">04 / Academic background</span>
        <h2 className="section-title">{t(EDUCATION_CONSTANTS.sectionTitle)}</h2>
        <div className="education-grid">
          {EDUCATION_CONSTANTS.education.map((edu, index) => (
            <div key={index} className="education-card">
              <div className="education-badge">
                <FaGraduationCap />
              </div>
              <h3 className="degree">{t(edu.degree)}</h3>
              <p className="institution">{t(edu.institution)}</p>
              <p className="period">{edu.period}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
