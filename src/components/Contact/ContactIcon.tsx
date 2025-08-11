import React from "react";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";
import { FaLinkedin, FaGithub } from "react-icons/fa";

interface ContactIconProps {
  type: string;
  className?: string;
}

const ContactIcon: React.FC<ContactIconProps> = ({ type, className = "" }) => {
  const iconStyle = `contact-icon ${className}`;

  switch (type) {
    case "email":
      return <HiMail className={iconStyle} />;
    case "phone":
      return <HiPhone className={iconStyle} />;
    case "linkedin":
      return <FaLinkedin className={iconStyle} />;
    case "github":
      return <FaGithub className={iconStyle} />;
    case "location":
      return <HiLocationMarker className={iconStyle} />;
    default:
      return <span className={iconStyle}>{type}</span>;
  }
};

export default ContactIcon;
