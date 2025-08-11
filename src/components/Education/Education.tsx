import React from 'react'
import { EDUCATION_CONSTANTS } from './constants'
import './Education.css'

const Education: React.FC = () => {
  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title">{EDUCATION_CONSTANTS.sectionTitle}</h2>
        <div className="education-grid">
          {EDUCATION_CONSTANTS.education.map((edu, index) => (
            <div key={index} className="education-card">
              <h3 className="degree">{edu.degree}</h3>
              <p className="institution">{edu.institution}</p>
              <p className="period">{edu.period}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education