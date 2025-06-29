import React, { useEffect, useRef, useState } from 'react';
import './home.css';
import Me from "../../assets/dp.jpeg"; // Ensure this path is correct
import HeaderSocials from './HeaderSocials';

const Home = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [clicked, setClicked] = useState(false); // New state to handle the click effect

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleAvatarClick = () => {
    setClicked(prev => !prev); // Toggle the 3D effect on click
  };

  return (
    <section
      className={`home_container ${isVisible ? 'visible' : ''}`}
      id="home"
      ref={sectionRef}
    >
      <img
        src={Me}
        alt="avatar"
        className={`home__img ${clicked ? 'clicked' : ''}`} // Apply 3D effect based on state
        onClick={handleAvatarClick} // Add click handler to avatar
      />
      <div className={`intro ${clicked ? 'clicked' : ''}`}> {/* Apply 3D effect based on state */}
        <h1 className="home__name">T. Nithin</h1>
        <span className="home__education">I Am A Full Stack Developer</span>
        <HeaderSocials />
      </div>
    </section>
  );
};

export default Home;
