import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Create this file for header styles

function Header() {
  return (
    <header className="sticky-header">
      <div className="logo">
        <img src="/images/logo.png
        " alt="Logo" />
      </div>
      <nav className="nav-links">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/products">Products</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
