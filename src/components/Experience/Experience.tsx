import React from 'react'
import { EXPERIENCE_CONSTANTS } from './constants'
import './Experience.css'

const Experience: React.FC = () => {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">{EXPERIENCE_CONSTANTS.sectionTitle}</h2>
        <div className="timeline">
          {EXPERIENCE_CONSTANTS.experiences.map((exp, index) => (
            <div key={index} className={`timeline-item ${exp.current ? 'current' : ''}`}>
              <div className="timeline-content">
                <h3 className="company">{exp.company}</h3>
                <h4 className="position">{exp.position}</h4>
                <p className="period">{exp.period}</p>
                <ul className="description">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience