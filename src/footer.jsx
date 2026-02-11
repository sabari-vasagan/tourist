import React from "react";
import "./App.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* About */}
        <div className="footer-col">
          <h3>TravelX</h3>
          <p>
            Explore the world with us. Discover amazing destinations and book unforgettable journeys.
          </p>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h4>Contact</h4>
          <p> tourist@gmail.com</p>
          <p> +91 9876543210</p>
          <p> Mumbai, India</p>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>Tours</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 TravelX. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
