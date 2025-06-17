import { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../assets/logo3.png';
import { FaHome, FaUser, FaCode, FaBriefcase, FaEnvelope } from 'react-icons/fa';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Scrollspy logic to detect current section
  useEffect(() => {
    const sections = ['home', 'about', 'projects', 'experience', 'contact'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // offset for navbar height

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#home" className="navbar-logo" onClick={closeMenu}>
          <img src={logo} alt="Gaurav Logo" className="navbar-logo-img" />
        </a>

        <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <a
            href="#home"
            className={`navbar-link ${activeSection === 'home' ? 'active' : ''}`}
            onClick={closeMenu}
          >
            <FaHome className="navbar-icon" /> Home
          </a>
          <a
            href="#about"
            className={`navbar-link ${activeSection === 'about' ? 'active' : ''}`}
            onClick={closeMenu}
          >
            <FaUser className="navbar-icon" /> About
          </a>
          <a
            href="#projects"
            className={`navbar-link ${activeSection === 'projects' ? 'active' : ''}`}
            onClick={closeMenu}
          >
            <FaCode className="navbar-icon" /> Projects
          </a>
          <a
            href="#experience"
            className={`navbar-link ${activeSection === 'experience' ? 'active' : ''}`}
            onClick={closeMenu}
          >
            <FaBriefcase className="navbar-icon" /> Experience
          </a>
          <a
            href="#contact"
            className={`navbar-link ${activeSection === 'contact' ? 'active' : ''}`}
            onClick={closeMenu}
          >
            <FaEnvelope className="navbar-icon" /> Contact
          </a>
        </div>

        <button
          className={`navbar-toggle ${isOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
