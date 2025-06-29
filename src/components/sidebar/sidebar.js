import React from "react";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <aside className="aside">
      <a href="#home" className="nav__logo">
  <h1 className="animated-logo">Portfolio</h1>
</a>


      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <a href="#home" className="nav__link">
              <i className="icon-home"></i>
              <h2>Home</h2>
            </a>
          </li>
          <li className="nav__item">
            <a href="#about" className="nav__link">
              <i className="icon-user-following"></i>
              <h2>About</h2>
            </a>
          </li>
          <li className="nav__item">
            <a href="#projects" className="nav__link">
              <i className="icon-briefcase"></i>
              <h2>Projects</h2>
            </a>
          </li>

          <li className="nav__item">
            <a href="#skills" className="nav__link">
              <i className="icon-note"></i>
              <h2>Skills</h2>
            </a>
          </li>
          <li className="nav__item">
            <a href="#contact" className="nav__link">
              <i className="icon-bubble"></i>
              <h2>Contact</h2>
            </a>
          </li>
        </ul>
      </nav>

      <div className="nav__footer">
        <span className="copyright">&copy; 2022–2025</span>
      </div>
    </aside>
  );
};

export default Sidebar;
