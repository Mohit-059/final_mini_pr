import React, { useRef, useState, useEffect } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import './ProductGrid.css';
import ralph from '../../assets/sample.jpg'

import sled from '../../assets/images/power_sled_coasters.png'

import cargone from '../../assets/sample.jpg'

const ProductGrid = ({ title }) => {
  const scrollRef = useRef(null);
  const [showLeftBtn, setShowLeftBtn] = useState(false);
  const [showRightBtn, setShowRightBtn] = useState(true);

  // Your existing product data
  const products = [
  {
    id: 102,
    image: sled,
    brand: "GYM INSPIRED UTILITY",
    name: "POWER SLED COASTERS",
    price: 1499,
    originalPrice: 2000,
    discount: "10%",
    ratingCount: 8,
    isNew: true
  },
  {
    id: 101,
    image: "https://cdn.shopify.com/s/files/1/2602/1472/products/MuscleSquadPhase2FreestandingRack_400X400.jpg?v=1747751812",
    brand: "MINI PR TRACKER",
    name: "MINI POWER RACK",
    price: 1200,
    originalPrice: 1599,
    discount: "10%",
    ratingCount: 6,
    isNew: true
  }
];


  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftBtn(scrollLeft > 0);
      setShowRightBtn(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    const currentRef = scrollRef.current;
    currentRef?.addEventListener('scroll', checkScroll);
    checkScroll(); // Initial check
    return () => currentRef?.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <section className="product-grid-section">
      <h2 className="section-title">{title}</h2>
      <p className="section-titlee" style={{fontSize:'20px'}}>Be the first to see what's new.</p>
      
      <div className="product-scroll-container">
        {showLeftBtn && (
          <button className="scroll-button left" onClick={scrollLeft}>
            <FiChevronLeft size={24} />
          </button>
        )}
        
        <div className="product-scroll-wrapper" ref={scrollRef}>
          <div className="product-cards-container">
            {products.map(product => (
              <div key={product.id} className="product-card-wrapper">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
        
        {showRightBtn && (
          <button className="scroll-button right" onClick={scrollRight}>
            <FiChevronRight size={24} />
          </button>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;