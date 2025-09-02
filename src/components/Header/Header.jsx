import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import Button from '../Button/Button';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container header-container">
        <Link to="/" className="logo-link"><h1 className="logo">Notezilla</h1></Link>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/browse">Browse</Link>
          <Link to="/upload">Upload</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <div className="auth-buttons">
          <Link to="/login" className="login-link">Login</Link>
          <Link to="/signup">
            <Button>Sign Up</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

// Add this to Header.css to style the logo link
// .logo-link { text-decoration: none; }

export default Header;