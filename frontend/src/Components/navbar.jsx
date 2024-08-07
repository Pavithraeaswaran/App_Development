import React from 'react';
import { Link } from 'react-router-dom';
import '../Assets/CSS/navbar.css';
import logo from '../Assets/Images/logo.png';
import adminLogo from '../Assets/Images/adminLogo.png'; // Add the admin logo image

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" className="logo-img" />
        <Link to="/">TranspoMasteR</Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/services">SERVICES</Link></li>
        <li><Link to="/tracking">TRACKING</Link></li>
        <li><Link to="/shipping">SHIPMENTS</Link></li>
        <li><Link to="/inventory">INVENTORY</Link></li>
        <li><Link to="/contact">SUPPORT</Link></li>
      </ul>
      <div className="auth-links">
        <Link to="/login">LOGIN</Link>
        <Link to="/login1" className="admin-link">
          <img src={adminLogo} alt="Admin Logo" className="admin-logo" />
         
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
