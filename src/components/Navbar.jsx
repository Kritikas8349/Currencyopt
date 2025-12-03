import React, { useState } from "react";
import "./Navbar.css";
import ContactPopup from "./ContactPopup";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("#home");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setMenuOpen(false); // Close menu after click
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-left">
        <img src="logo.png" alt="Logo" className="logo" />
      </div>

      {/* Hamburger Icon */}
      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={handleMenuToggle}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Center Links */}
      <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
        <li>
          <a
            href="#home"
            className={activeLink === "#home" ? "active" : ""}
            onClick={() => handleLinkClick("#home")}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            className={activeLink === "#about" ? "active" : ""}
            onClick={() => handleLinkClick("#about")}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#services"
            className={activeLink === "#services" ? "active" : ""}
            onClick={() => handleLinkClick("#services")}
          >
            Services
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className={activeLink === "#contact" ? "active" : ""}
            onClick={() => handleLinkClick("#contact")}
          >
            Contact
          </a>
        </li>
      </ul>

      <div className="nav-right">
      <button className="contact-btn" onClick={() => setIsOpen(true)}>
        Contact Us
      </button>

      </div>
      <ContactPopup isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </nav>
  );
};

export default Navbar;
