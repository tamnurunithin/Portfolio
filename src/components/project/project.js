import React from 'react';
import './project.css';

const projects = [
  {
    title: "YouTube Interface",
    tech: "ReactJS, CSS",
    img: "https://i.pinimg.com/originals/09/0c/06/090c0658afb2350efff9c2ac705d5fe9.jpg",
    github: "https://github.com/tamnurunithin/Youtube-Interface",
    live: "https://youtube-u6fb.vercel.app/",   // ← add live link
  },
  {
    title: "Netflix Interface",
    tech: "HTML, CSS, JS",
    img: "https://cdn-images-1.medium.com/max/1200/1*ty4NvNrGg4ReETxqU2N3Og.png",
    github: "https://github.com/tamnurunithin/Netflix-Interface",
    live: "https://tamnurunithin.github.io/Netflix-Interface",   // ← add live link
  },
  {
    title: "Weather App",
    tech: "ReactJS, API, NodeJS",
    img: "https://cdn-icons-png.flaticon.com/512/3845/3845731.png",
    github: "https://github.com/tamnurunithin/Weather_Website",
    live: "https://weather-website-lac.vercel.app/",     // ← add live link
  },
];

const Project = () => (
  <section className="projects" id="projects">
    <h6 className="projects__title">My Projects</h6>
    <div className="projects__grid">
      {projects.map((project, index) => (
        <div className="project__card" key={index}>
          <img src={project.img} alt={project.title} className="project__img" />
          <h3 className="project__name">{project.title}</h3>
          <p className="project__tech">{project.tech}</p>

          {/* NEW live‑demo button */}
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="project__live-link"
          >
            Open Live Project
          </a>

          {/* existing GitHub button */}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="project__github-link"
          >
            View Code on GitHub
          </a>
        </div>
      ))}
    </div>
  </section>
);

export default Project;
