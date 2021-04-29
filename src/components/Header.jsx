import React from 'react';
import { Link, useHistory, useLocation } from  'react-router-dom';
import './Header.css';

function Header() {
  const path = useLocation().pathname;
  return (
    <header className="Header">
      <h1>Saulo Kirchmaier</h1>
      <nav className="nav-links">
        <Link to="/" className={ (path === '/') ? 'link selected' : 'link' }>
          <h4>Home</h4>
        </Link>
        <Link to="/about" className={ (path === '/about') ? 'link selected' : 'link' }>
          <h4>About</h4>
        </Link>
        <Link to="/projects" className={ (path === '/projects') ? 'link selected' : 'link' }>
          <h4>Projects</h4>
        </Link>
        <Link to="/contact" className={ (path === '/contact') ? 'link selected' : 'link' }>
          <h4>Contact</h4>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
