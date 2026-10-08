import React from "react";
import { HEADER_CONSTANTS } from "./constants";
import "./Header.css";

const initials = HEADER_CONSTANTS.name
  .split(" ")
  .filter(Boolean)
  .map((word) => word[0])
  .join("");

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="hero">
          <div className="avatar-ring">
            <span className="avatar-initials">{initials}</span>
          </div>
          <h1 className="name">{HEADER_CONSTANTS.name}</h1>
          <h2 className="title">{HEADER_CONSTANTS.title}</h2>
          <p className="subtitle">{HEADER_CONSTANTS.subtitle}</p>
          <div className="cta-buttons">
            <a
              href={HEADER_CONSTANTS.links.contact}
              className="btn btn-primary"
            >
              {HEADER_CONSTANTS.buttons.contact}
            </a>
            <a
              href={HEADER_CONSTANTS.links.experience}
              className="btn btn-secondary"
            >
              {HEADER_CONSTANTS.buttons.viewWork}
            </a>
          </div>
        </div>
        <div className="scroll-indicator">⋮</div>
      </div>
    </header>
  );
};

export default Header;
