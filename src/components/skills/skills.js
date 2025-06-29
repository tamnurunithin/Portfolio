// C:\Users\nithin\OneDrive\Desktop\Projects\Basic Port\port\src\components\skills\skills.js
import React from 'react';
import './skills.css';

const Skills = () => {
  const skills = [
    { name: 'Python',      image: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg' },
    { name: 'Java',        image: 'https://www.vectorlogo.zone/logos/java/java-icon.svg' },
    { name: 'HTML',        image: 'https://cdn.worldvectorlogo.com/logos/html-1.svg' },
    { name: 'CSS',         image: 'https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg' },
    { name: 'JavaScript',  image: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' },
    { name: 'React',       image: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
    { name: 'MySQL',       image: 'https://www.vectorlogo.zone/logos/mysql/mysql-official.svg' },
    { name: 'Nodejs',      image: 'https://cdn.worldvectorlogo.com/logos/nodejs-3.svg' },
    { name: 'Git',         image: 'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg' }, // ← new entry
  ];

  return (
    <section className="skills-section" id="skills">
      <h2 className="skills-title">Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <img src={skill.image} alt={skill.name} className="skill-image" />
            <p className="skill-name">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
