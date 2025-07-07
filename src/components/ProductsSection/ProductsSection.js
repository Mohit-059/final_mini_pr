import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../CategoryGrid/CategoryGrid.css';

import one from '../../assets/card_images/barbell.png';
import sled from '../../assets/card_images/sled3.png';
import bench from '../../assets/card_images/bench.png';
import accessories from '../../assets/card_images/accessories2.png';
import benchh from '../../assets/card_images/finall.png';
import plates from '../../assets/card_images/plates.png';

const CategoryGrid = () => {
  const navigate = useNavigate();

  const brands = [
    {
    name: "Deadlift Platform",
    badge: "Popular", // Using 'Popular' as a suitable badge
    price: "₹899", // Original price from allProducts
    currentprice: "₹499", // Current price from allProducts
    image: "https://res.cloudinary.com/dkybkcox5/image/upload/v1751893420/01_shxcaz.jpg"
  },
  {
    name: "Barbell Display Plaque",
    badge: "New", // Using 'New' as a suitable badge
    price: "₹899", // Original price from allProducts
    currentprice: "₹499", // Current price from allProducts
    image: "https://res.cloudinary.com/dkybkcox5/image/upload/v1751902432/05_ke9p3j.jpg"
  },
  {
    name: "Mini Bench Press Setup",
    badge: "Best Seller", // Using 'Best Seller' as a suitable badge
    price: "₹1199", // Original price from allProducts
    currentprice: "₹899", // Current price from allProducts
    image: "https://res.cloudinary.com/dkybkcox5/image/upload/v1751899415/01_os8ftd.jpg"
  },
  {
    name: "Barbell Holders",
    badge: "Accessory", // Custom badge for clarity
    price: "₹250", // Original price from allProducts
    currentprice: "₹160", // Current price from allProducts
    image: "https://res.cloudinary.com/dkybkcox5/image/upload/v1751899814/01_bcmm19.jpg"
  },
  {
    name: "Sled Coasters",
    badge: "Popular", // Using 'Popular' as a suitable badge
    price: "₹1300", // Original price from allProducts
    currentprice: "₹899", // Current price from allProducts
    image: "https://res.cloudinary.com/dkybkcox5/image/upload/v1751894336/01_lx4vfw.jpg"
  },
    {
      name: "All Products",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrlBR2ORcQ2jtN8UflyNc8TibIxMm9MZz6ShJn8Pp8o8uNHwcyLO66ooW0EIYEBElivNI&usqp=CAU"
    }
  ];

  return (
    <section className="brand-offers">
      <h2 className="section-title-top">TRENDY PICKS</h2>
      <p className="section-titlee" style={{ fontSize: '20px' }}>
        Curated must-haves from this week’s top picks.
      </p>
      <div className="brand-grid">
        {brands.map((brand, index) => (
          <div
            key={index}
            className="brand-card"
            onClick={() => navigate('/products')}
            style={{ cursor: 'pointer' }}
          >
            <img
              src={brand.image}
              alt={brand.name}
              className="brand-image"
            />
            <h3>{brand.name}</h3>

            {brand.badge && (
              <span style={{
                display: 'inline-block',
                backgroundColor: 'rgba(212, 175, 55, 0.15)',
                color: '#d4af37',
                padding: '4px 12px',
                borderRadius: '20px',
                fontSize: '0.75rem',
                fontWeight: 600,
                margin: '6px 0',
              }}>
                {brand.badge}
              </span>
            )}

            {brand.price && (
              <p className="discount" style={{ fontWeight: '600', color: '#fff' }}> <span className='cross_original' style={{textDecoration: 'line-through', color: '#888'}}>{brand.price}</span> {brand.currentprice}</p>
            )}

            {!brand.price && (
              <p className="discount" style={{ fontSize: '0.9rem', color: '#aaa' }}>
                Explore the full collection →
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryGrid;
