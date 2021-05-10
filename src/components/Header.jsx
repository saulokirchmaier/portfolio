import React from 'react';
import { Link, useLocation } from  'react-router-dom';
// import logo from '../img/SK-logo-invertido.png';
import logo from '../img/SK-logo-final-reto.png';
import './Header.css';
import { FiMenu } from "react-icons/fi";

function Header() {
  const path = useLocation().pathname;
  const width = window.screen.width

  const renderHamburguer = () => {
    return (
      <div className="dropdown-container">
        <FiMenu className="hamburgerMenu"/>
        <nav className="dropdown-content">
          <Link to="/" className="link">
            <h4>Home</h4>
          </Link>
          <Link to="/about" className="link">
            <h4>About</h4>
          </Link>
          <Link to="/projects" className="link">
            <h4>Projects</h4>
          </Link>
          <Link to="/contact" className="link">
            <h4>Contact</h4>
          </Link>
        </nav>
      </div>
    );
  }

  return (
    <header className="Header">
      <Link to="/" className="logo-name">
        <img src={ logo } alt="SK logo" className="logo" />
        <h1>Saulo Kirchmaier</h1>
      </Link>
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
      {width <= 450 && renderHamburguer()}
      
    </header>
  );
};

export default Header;
