// src/components/Navbar.js
import React, { useState } from 'react';
import './index.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="navbar">
      <h1 className="text-xl font-bold">My Portfolio</h1>
      <div className="menu" onClick={toggleMenu}>
        &#9776; {/* Hamburger icon */}
      </div>
      <ul className={isMenuOpen ? 'active' : ''}>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
