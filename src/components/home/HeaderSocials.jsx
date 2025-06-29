import React from "react";
import "./HeaderSocials.css";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="home__socials-wrapper">
      <div className="home__socials">
        <div className="tooltip-container">
          <a href="https://github.com/tamnurunithin" className="home__social-link" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <span className="tooltip-text">GitHub</span>
        </div>

        <div className="tooltip-container">
          <a href="https://www.linkedin.com/in/tamnuru-nithin-27451b204/" className="home__social-link" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <span className="tooltip-text">LinkedIn</span>
        </div>

        <div className="tooltip-container">
          <a href="mailto:tamnurunithin@gmail.com" className="home__social-link">
            <FaEnvelope />
          </a>
          <span className="tooltip-text">Email</span>
        </div>

        <div className="tooltip-container">
          <a href="8790562858" className="home__social-link">
            <FaPhone />
          </a>
          <span className="tooltip-text">Call</span>
        </div>
      </div>

      {/* Resume button placed underneath icons */}
      <div className="resume-button-container">
        <a
          href="https://drive.google.com/file/d/1LnMdtVtc5WsuV-YXzXy_KxG-p7cYkc4g/view?usp=drive_link" // Ensure it's placed inside the `public/` directory
          className="resume-button"
          download
        >
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default HeaderSocials;
