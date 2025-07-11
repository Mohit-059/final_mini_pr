import React from 'react';
import './ContactPage.css';
import { FaInstagram, FaTwitter, FaLinkedin, FaYoutube ,FaEnvelope } from 'react-icons/fa';
import logo from '../../assets/logo.png'; // update path to your logo

const ContactPage = () => {
  return (
    <div className="contact-page">
      <div className="contact-card">
        <img src="https://res.cloudinary.com/dkybkcox5/image/upload/v1751921817/logo_avk7bw.png" alt="Brand Logo" className="contact-logo" />
        <h2 className="contact-brand">THE MINI PR</h2>
        <p className="contact-tagline">Where every rep has a story. Let’s talk.</p>

        <div className="contact-socials">
          <a href="https://instagram.com/theminipr" target="_blank" rel="noreferrer">
            <FaInstagram /> @the.mini.pr
          </a>
          <a href="https://www.youtube.com/@theminipr" target="_blank"><FaYoutube />@theminipr</a>
          <a href="mailto:contact@theminipr@gmail.com">
            <FaEnvelope /> theminipr@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
