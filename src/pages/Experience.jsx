import React from 'react';
import { Briefcase, Code } from "lucide-react";
import settribeLogo from "../assets/company1.png";
import codesoftLogo from "../assets/c2.jpg";
import './Experience.css';

function Experience() {
  return (
    <section className="exp-section">
      <h1 className="exp-heading">Experience</h1>

      <div className="exp-grid">
        {/* SetTribe */}
        <div className="exp-card border-accent">
          <div className="exp-top">
            <img src={settribeLogo} alt="SetTribe" className="exp-logo" />
            <div>
              <h2 className="exp-company">SetTribe Company</h2>
              <p className="exp-role"><Briefcase size={16} className="icon" /> Full-Stack Web Developer Intern | Dec 2024 – Present</p>
               <p className="exp-mode">Mode: <strong>On-site</strong></p>
            </div>
          </div>
          <ul className="exp-points">
            <li>Worked as a Full-Stack Web Developer during my internship at SetTribe Company.</li>
            <li>Contributed to live projects: Mohatadevi Sansthan, ZP Nagpur, ZP Chandrapur, E-Commerce, and Recruitment Portal.</li>
            <li>Built dynamic features like dependent dropdowns, dashboard charts, and admin interfaces using PHP, MySQL, HTML, CSS, JS, and AJAX.</li>
            <li>Improved skills in time management, meeting deadlines, and communicating effectively in an IT environment.</li>
          </ul>
          <div className="exp-tags">
            <span>PHP</span><span>MySQL</span><span>HTML</span><span>CSS</span><span>JavaScript</span><span>Angular</span><span>AJAX</span>
          </div>
        </div>

        {/* Codesoft */}
        <div className="exp-card border-purple">
          <div className="exp-top">
            <img src={codesoftLogo} alt="Codesoft" className="exp-logo" />
            <div>
              <h2 className="exp-company">Codesoft Company</h2>
              <p className="exp-role"><Code size={16} className="icon" /> Frontend Developer Intern | Aug 2024 – Nov 2024</p>
               <p className="exp-mode">Mode: <strong>Remote</strong></p>
            </div>
          </div>
          <ul className="exp-points">
            <li>Developed user interfaces using HTML, CSS, and JavaScript to improve usability and user experience.</li>
            <li>Implemented responsive designs to ensure cross-device compatibility and smooth user interactions.</li>
            <li>Collaborated closely with senior developers and designers to translate UI/UX wireframes into functional code.</li>
            <li>Optimized website performance through efficient coding practices and frontend debugging.</li>
          </ul>


          <div className="exp-tags">
            <span>React</span><span>Angular</span><span>HTML5</span><span>CSS3</span><span>JavaScript</span><span>Team Leadership</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
