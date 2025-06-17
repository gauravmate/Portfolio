import React from 'react';
import './Home.css';
import profileImage from '../assets/g11.jpg';
import { FaLinkedin, FaGithub, FaEnvelope, FaFacebook } from "react-icons/fa";

function Home() {
  return (
    <section className="home">
      <div className="home-text">
        <h3>HELLO!</h3>
        <h1>I Am Gaurav Mate</h1>
        <p>
          Hi, I’m a Front-End & Web Developer focused on building impactful accessible, and modern
          web experiences. I’m passionate about writing clean code and creating intuitive designs.
        </p>

        <div className="home-buttons">
          <a href="#projects" className="btn">View Work</a>
          <a href="https://drive.google.com/file/d/1dRt0LceJh4XX22iMmhWjexm1xaTA7-OT/view?usp=sharing" className="btn">Hire Me</a>
        </div>

        <div className="social-icons">
          <a href="https://www.linkedin.com/in/gaurav-mate9022/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://github.com/gauravmate" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="mailto:yourmail@example.com">
            <FaEnvelope />
          </a>
        </div>
      </div>

      <div className="hero-img" style={{ marginRight: '10rem' }}>
        <img src={profileImage} alt="Gaurav Mate" />
      </div>
    </section>
  );
}

export default Home;
