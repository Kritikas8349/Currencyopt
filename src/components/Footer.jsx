import React, { useState } from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import ContactPopup from "./ContactPopup";


const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <footer className="footer-section" id="contact">
      <div className="footer-top">
        <h1 className="footer-heading">
          Let’s <span>Connect</span> there
        </h1>
        <button className="footer-contact-btn" onClick={() => setIsOpen(true)}>Contact Us</button>
      </div>

      <div className="footer-divider"></div>

      <div className="footer-content">
        
      <div className="footer-col">
  <div className="footer-logo">
    <img src="/logo.png" alt="Company Logo" />
  </div>

  <p className="footer-desc">
    Empowering traders with insights, tools, and global financial expertise to grow consistently.
  </p>

  <div className="footer-social">
    <a href="https://facebook.com" target="_blank" rel="noreferrer">
      <FaFacebookF className="social-icon" />
    </a>
    <a href="https://instagram.com" target="_blank" rel="noreferrer">
      <FaInstagram className="social-icon" />
    </a>
    <a href="https://twitter.com" target="_blank" rel="noreferrer">
      <FaXTwitter className="social-icon" />
    </a>
    <a href="https://linkedin.com" target="_blank" rel="noreferrer">
      <FaLinkedinIn className="social-icon" />
    </a>
    <a href="https://youtube.com" target="_blank" rel="noreferrer">
      <FaYoutube className="social-icon" />
    </a>
  </div>
</div>

        {/* NAVIGATION */}
        <div className="footer-col">
          <h3 className="footer-title">Navigation</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#faqs">FAQs</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>

        </div>

        {/* CONTACT INFO */}
        <div className="footer-col">
          <h3 className="footer-title">Contact</h3>
          <p>(+91) 98765-43210</p>
          <p>support@tradepro.com</p>
          <p>www.currencyopt.com</p>
        </div>


      </div>

      <div className="footer-bottom">
        <p>Copyright © 2025 Currencyopt. All Rights Reserved.</p>

        <div className="footer-links">
          <a href="#">User Terms & Conditions</a>
          <span>|</span>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
      <ContactPopup isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </footer>
    
  );
};

export default Footer;
