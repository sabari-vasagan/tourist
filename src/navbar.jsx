import React from "react";
import "./App.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">TOURIST</div>

        <ul className="nav-links">
          <li>HOME</li>
          <li>SERVICES</li>
          <li>ABOUT</li>
          <li>CONTACT</li>
        </ul>

        <div className="menu-icon">☰</div>
      </div>
    </nav>
  );
};

export default Navbar;
