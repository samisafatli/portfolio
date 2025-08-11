import React from 'react'
import { CONTACT_CONSTANTS } from './constants'
import ContactIcon from './ContactIcon'
import './Contact.css'

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">{CONTACT_CONSTANTS.sectionTitle}</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>{CONTACT_CONSTANTS.heading}</h3>
            <p>{CONTACT_CONSTANTS.description}</p>
            <div className="contact-links">
              {CONTACT_CONSTANTS.links.map((link, index) => (
                link.external ? (
                  <a 
                    key={index}
                    href={link.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="contact-link"
                  >
                    <ContactIcon type={link.icon} className="icon" />
                    {link.text}
                  </a>
                ) : (
                  link.href === "#" ? (
                    <div key={index} className="contact-link">
                      <ContactIcon type={link.icon} className="icon" />
                      {link.text}
                    </div>
                  ) : (
                    <a key={index} href={link.href} className="contact-link">
                      <ContactIcon type={link.icon} className="icon" />
                      {link.text}
                    </a>
                  )
                )
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact