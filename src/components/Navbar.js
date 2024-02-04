import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const NavBar = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <div className="logo">TravelMedia.in</div>
      </Link>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/item/1">Detail</Link>
      </div>
    </div>
  );
};

export default NavBar;
