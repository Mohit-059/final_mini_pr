import React, { useState, useEffect, useRef } from 'react';
import './HeroBanner.css';
import one from '../../assets/Banners/one.png';
import four from '../../assets/Banners/four.png';
import five from '../../assets/Banners/five.png';

const images = [one, four, five];

const HeroBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    if (deltaX > 50) setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    else if (deltaX < -50) setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <section className="hero-banner">
      <div
        className="hero-image-container"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <img
          src={images[currentIndex]}
          alt={`Banner ${currentIndex + 1}`}
          className="hero-image"
        />

        {!isMobile && (
          <>
            <button className="arrow left-arrow" onClick={goToPrevious}>❮</button>
            <button className="arrow right-arrow" onClick={goToNext}>❯</button>
          </>
        )}

        <div className="dot-container">
          {images.map((_, index) => (
            <span
              key={index}
              className={`dot ${currentIndex === index ? 'active' : ''}`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
