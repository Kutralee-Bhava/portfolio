import React from 'react';
// import './Footer.css'; // REMOVE THIS LINE IF IT'S THERE

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content-wrapper">


        {/* Navigation Links */}
        <div className="footer-nav">
          <ul>
            <li><a href="#latest">LATEST</a></li>
            <li><a href="#directors">DIRECTORS</a></li>
            <li><a href="#photo">PHOTO</a></li>
            <li><a href="#immersive">IMMERSIVE</a></li>
            <li><a href="#culture">CULTURE</a></li>
            <li><a href="#careers">CAREERS</a></li>
            <li><a href="#contact">CONTACT</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="footer-social">
          <ul>
            <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          </ul>
        </div>

        {/* Mailing List Section */}
        <div className="footer-mailing-list">
          <h3>Join our mailing list</h3>
          <div className="mailing-list-form">
            <input type="email" placeholder="Your Email Address" />
            <button>// SUBMIT</button>
          </div>
        </div>
      </div>

      {/* Copyright and Credits */}
      <div className="footer-bottom">
        <p className="footer-copyright">©2025 Vastri Infinity / All rights reserved</p>
        <p className="footer-website-by">Website by Bala</p>
      </div>
    </footer>
  );
};

export default Footer;