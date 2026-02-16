import React from 'react';

function Header() {
  return (
    <header className="header">
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Skills</a></li>
          <li><a href="#">Resume</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <div className="social-icons">
          <a href="http://linkedin.com/in/viviannykhatly" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/viviannyk" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://instagram.com/khaatly" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
