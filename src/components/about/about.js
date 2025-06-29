import React, { useEffect, useState } from 'react';
import './about.css';

const leftTextLines = [
  "Name: T. Nithin",
  "Location: Hyderabad, India",
  "Languages: English, Hindi, Telugu",
  "Education: B.Tech in Computer Science",
  "Interests: Coding, Designing, Exploring Tech"
];

const rightText = `I'm T.Nithin, a passionate Full Stack Developer with a love for creating seamless web applications. I specialize in building responsive, scalable, and efficient front-end and back-end solutions. My journey in tech started with curiosity and grew into a career that fuels my creativity daily.`;

const About = () => {
  const [typedRightText, setTypedRightText] = useState('');
  const [rightIndex, setRightIndex] = useState(0);

  // Typing effect for right block
  useEffect(() => {
    const rightTyping = setInterval(() => {
      if (rightIndex < rightText.length) {
        setTypedRightText(prev => prev + rightText[rightIndex]);
        setRightIndex(prev => prev + 1);
      } else {
        clearInterval(rightTyping);
      }
    }, 30);
    return () => clearInterval(rightTyping);
  }, [rightIndex]);

  return (
    <section className="about_container" id="about">
      {/* Title - Centered at the top */}
      <h6 className="projects__title">About</h6>

      <div className="about_grid">
        {/* Left Block */}
        <div className="about_left">
          <ul className="about_info">
            {leftTextLines.map((line, index) => {
              const separatorIndex = line.indexOf(':');
              if (separatorIndex !== -1) {
                const key = line.slice(0, separatorIndex);
                const value = line.slice(separatorIndex + 1);
                return (
                  <li key={index}>
                    <strong>{key}:</strong>{value}
                  </li>
                );
              } else {
                return <li key={index}>{line}</li>;
              }
            })}
          </ul>
        </div>

        {/* Right Block */}
        <div className="about_right">
          <p className="about_description">
            {typedRightText}
            {rightIndex < rightText.length && <span className="cursor">|</span>}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
