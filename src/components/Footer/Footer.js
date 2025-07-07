import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <h2><Link to="/" className="footer-logo-link">THE MINI PR</Link></h2>
          <p className="tagline">For lifters who respect form, failure, and every rep in between.</p>
        </div>

        <div className="footer-nav">
          <h4>Explore</h4>
          <ul>
            <li><Link to="/products">Shop</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/legal/returns">Returns & Refunds</Link></li>
            <li><Link to="/legal/terms">Terms & Conditions</Link></li>
            <li><Link to="/legal/privacy">Privacy Policy</Link></li>
            <li><Link to="/legal/shipping">Shipping Info</Link></li>

          </ul>
        </div>

        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer"><FaYoutube /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} THE MINI PR • Crafted for the obsessed. Fueled by reps, not excuses.</p>
      </div>
    </footer>
  );
};

export default Footer;
