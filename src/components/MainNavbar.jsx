import React, { useState } from "react";

import {
  FaSearch,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { SlArrowDown } from "react-icons/sl";

const MainNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="main-navbar">
      <div className="navbar-container container">
        {/* Logo Section */}
        <div className="logo">
          <h1><span className="logo-reg">Register</span><span className="logo-karo">Karo</span></h1>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Navbar Links */}
        <ul className={`navbar-links ${isMobileMenuOpen ? "active" : ""}`}>
          <li><a href="#home">Home</a></li>
          <li className="dropdown">
            <a href="#services">Our Services</a><SlArrowDown className="arrow-icon"/>
            <ul className="dropdown-menu">
              <li><a href="#service1">Service 1</a></li>
              <li><a href="#service2">Service 2</a></li>
              <li><a href="#service3">Service 3</a></li>
            </ul>
          </li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#contact">Contact Us</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#search" className="search-icon"><FaSearch /></a></li>
          <li><button href="#talk" className="talk-expert-button">Talk An Expert</button></li>
        </ul>
      </div>
    </nav>
  );
};

export default MainNavbar;
