import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="Header">
      <h1>Saulo Kirchmaier</h1>
      <nav className="nav-links">
        <h4>Home</h4>
        <h4>About</h4>
        <h4>Projects</h4>
        <h4>Contact</h4>
      </nav>
    </header>
  );
};

export default Header;
