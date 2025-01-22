import React from "react";
import { FaEnvelope, FaPhone, FaInstagram, FaFacebook, FaTwitter, FaPinterest } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container-top container">
        <div className="navbar-items">
          <a href="mailto:example@email.com" className="navbar-link">
            <FaEnvelope className="navbar-icon" /> example@email.com
          </a>
          <a href="tel:+123456789" className="navbar-link">
            <FaPhone className="navbar-icon" /> +123456789
          </a>
          <a href="https://instagram.com" target="_blank" className="navbar-link">
            <FaInstagram className="navbar-icon" />
          </a>
          <a href="https://facebook.com" target="_blank" className="navbar-link">
            <FaFacebook className="navbar-icon" />
          </a>
          <a href="https://twitter.com" target="_blank" className="navbar-link">
            <FaTwitter className="navbar-icon" />
          </a>
          <a href="https://pinterest.com" target="_blank" className="navbar-link">
            <FaPinterest className="navbar-icon" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
