// src/components/Footer/Footer.jsx

import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>Mohit Kumar</h3>
        <p>Made with 💙 using React & MERN Stack</p>
        <div className="footer-icons">
          <a href="https://github.com/Mohitkumar3282" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/mohit-kumar-765a47318" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="mailto:mohitsk688@gmail.com">
            <FaEnvelope />
          </a>
        </div>
        <p className="copyright">© {new Date().getFullYear()} Mohit Kumar. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
