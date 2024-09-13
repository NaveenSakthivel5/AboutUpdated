import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };    

  return (
    <header className="header">
      <img className="layer-1" src="assets/vectors/Layer1_x2.svg" alt="Layer 1 Logo" />
      <nav className={`nav-menu ${menuOpen ? 'open' : ''}`}>
        <div className="about-contact">
          <a href="/about" className="about-link">About</a>
          <span className="separator1"> - </span>
          <a href="/contact" className="contact-link">Contact</a>
        </div>
      </nav>
      <div className="hamburger" onClick={toggleMenu}>
        <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
        <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
        <span className={`bar ${menuOpen ? 'open' : ''}`}></span>
      </div>
    </header>
  );
};

export default Header;
