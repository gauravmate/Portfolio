import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-wrapper">
      <h1 className="about-title">About Me</h1> {/* Moved outside container */}
      
      <div className="about-container">
        <p className="about-text">
          Hello! I'm <span className="highlight">Gaurav Mate</span>, a dedicated Full Stack Web Developer from Pune with a strong foundation in 
          <span className="highlight"> PHP</span>, <span className="highlight">MySQL</span>, <span className="highlight">React.js</span>, and <span className="highlight">MongoDB</span>. 
          I recently completed a comprehensive training program at <span className="highlight">Seed Infotech</span> and gained hands-on experience through internships at 
          <span className="highlight">SetTribe</span> and <span className="highlight">Codesoft</span>.
        </p>
        <p className="about-text">
          I've worked on live projects like <span className="highlight">ZP Nagpur</span> and <span className="highlight">Mohatadevi Sansthan</span>, focusing on building clean, 
          responsive interfaces and dynamic web functionalities. I’m passionate about creating impactful web solutions, improving user experience, 
          and continuously growing as a developer by exploring new technologies and frameworks.
        </p>
      </div>
    </div>
  );
}

export default About;
