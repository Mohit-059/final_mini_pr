import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { FaInstagram, FaTwitter, FaLinkedin, FaYoutube ,FaEnvelope} from 'react-icons/fa';

const Footer = () => {
  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <h2><Link to="/" className="footer-logo-link" onClick={scrollToTop}>THE MINI PR</Link></h2>
          <p className="tagline">For lifters who respect form, failure, and every rep in between.</p>
        </div>

        <div className="footer-nav">
          <h4>Explore</h4>
          <ul>
            <li><Link to="/products" onClick={scrollToTop}>Shop</Link></li>
            <li><Link to="/contact" onClick={scrollToTop}>Contact</Link></li>
            <li><Link to="/legal/returns" onClick={scrollToTop}>Returns & Refunds</Link></li>
            <li><Link to="/legal/terms" onClick={scrollToTop}>Terms & Conditions</Link></li>
            <li><Link to="/legal/privacy" onClick={scrollToTop}>Privacy Policy</Link></li>
            <li><Link to="/legal/shipping" onClick={scrollToTop}>Shipping Info</Link></li>

          </ul>
        </div>

        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://www.instagram.com/the.mini.pr/" target="_blank" rel="noreferrer"><FaInstagram /></a>
            <a href="https://www.youtube.com/@theminipr-q5w4u" target="_blank" rel="noreferrer"><FaYoutube /></a>
            <a href="mailto:contact@theminipr@gmail.com">
              <FaEnvelope />
            </a>
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
