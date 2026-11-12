import { useLanguage } from "../../Language";
import React from "react";
import { ABOUT_CONSTANTS } from "./constants";
import { CONTACT_CONSTANTS } from "../Contact/constants";
import "./About.css";

const About: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section id="about" className="about">
      <div className="container">
        <span className="section-kicker">01 / Who I am</span>
        <h2 className="section-title">{t(ABOUT_CONSTANTS.sectionTitle)}</h2>
        <div className="about-content">
          <div className="about-text">
            {ABOUT_CONSTANTS.paragraphs.map((paragraph, index) => (
              <p key={index}>{t(paragraph)}</p>
            ))}
          </div>
        </div>
        <div className="about-contact" aria-label={t("Contact links")}>
          <p>{t("Have a project in mind? Let's talk.")}</p>
          <div className="about-contact-links">
            {CONTACT_CONSTANTS.links.filter((link) => link.href !== "#").map((link) => (
              <a key={link.icon} id={link.icon === "email" ? "contact-email" : undefined} href={link.href} target={link.external ? "_blank" : undefined} rel={link.external ? "noopener noreferrer" : undefined}>
                {link.icon === "email" ? "Email" : link.text} <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
