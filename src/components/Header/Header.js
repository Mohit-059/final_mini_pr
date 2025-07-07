import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiMenu, FiX } from 'react-icons/fi';
import './Header.css';
import logo from '../../assets/logo.png';


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  
  useEffect(() => {
    const header = document.querySelector('.fashion-header');

    const handleScroll = () => {
      if (window.scrollY > 10) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <>
    <div className="premium-top-banner">⚡ SHOP THE MINDSET</div>
    
    

    <header className="fashion-header">
      <div className="top-bar">
        <Link to="/" className="logo-link">
          <span className="logo"><img src="https://res.cloudinary.com/dkybkcox5/image/upload/v1751921817/logo_avk7bw.png" alt="Dripstore Logo" /></span>
          <span className="logo-part-2">THE</span>
          <span className="logo-part-1">MINI </span>
          <span className="logo-part-2">PR</span>
        </Link>

        <button className="menu-toggle" onClick={toggleMenu}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

        <nav className={`main-nav ${menuOpen ? 'active' : ''}`}>
          <ul>
            <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link to="/products" onClick={() => setMenuOpen(false)}>Products</Link></li>
            <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
          </ul>
        </nav>
      </div>
      
    </header>
    
    
    </>
  );
};

export default Header;
