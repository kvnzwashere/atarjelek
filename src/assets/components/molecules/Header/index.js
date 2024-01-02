import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <h1 className="logo-app">KELOMPOK 6 PAGE</h1>
      </div>
      <div className="nav-container">
        
        <Link to="/login" className="nav-link">
          Logout
        </Link>
      </div>
    </div>
  );
};

export default Header;
