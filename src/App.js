import React from 'react';
import './App.css';

import Sidebar from "./components/sidebar/sidebar";
import Home from "./components/home/home";
import About from "./components/about/about";
import Project from "./components/project/project";
import Skills from "./components/skills/skills";
import Contact from "./components/contact/contact";

const App = () => {
  return (
    <div className="app_layout">
      <Sidebar />
      <main className="main_content">
        <Home />
        <About />
        <Project />
        <Skills />
        <Contact />
      </main>
    </div>
  );
};

export default App;
