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
      name: "Mini Power Rack",
      badge: "Best Seller",
      price: "₹1499",
      currentprice:"₹899",
      image: benchh
    },
    {
      name: "Sled Coasters",
      badge: "Popular",
      price: "₹1299",
      currentprice:"₹999",
      image: sled
    },
    {
      name: "Bench Keychain",
      badge: "New",
      price: "₹89",
      currentprice:"₹59",
      image: bench
    },
    {
      name: "Accessory Set",
      badge: "Combo",
      price: "₹899",
      currentprice:"₹399",
      image: accessories
    },
    {
      name: "Barbell Board",
      badge: "Limited",
      price: "₹700",
      currentprice:"₹459",
      image: one
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
