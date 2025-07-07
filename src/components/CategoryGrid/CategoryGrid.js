import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CategoryGrid.css';

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
      name: "PR-TRACKERS",
      discount: "Mini setups to track your Personal Records",
      image: benchh
    },
    {
      name: "GYM-INSPIRED ESSENTIALS",
      discount: "Useful everyday items redesigned",
      image: sled
    },
    {
      name: "ACCESSORIES",
      image: accessories,
      discount:"Mini Accessories for your mini PR trackers"
    },
    {
      name: "LIMITED TIME COMBO DEALS",
      discount: "Special Combos for you, make your money worth",
      image: one
    },
    {
      name:"EXTRAS",
      image: plates
    },
    {
      name:"All Products",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrlBR2ORcQ2jtN8UflyNc8TibIxMm9MZz6ShJn8Pp8o8uNHwcyLO66ooW0EIYEBElivNI&usqp=CAU"
    }
  ];

  return (
    <section className="brand-offers">
      <h2 className="section-title-top">OUR CATEGORIES</h2>
      <p className="section-titlee" style={{fontSize:'20px'}}>Crafted with Purpose, Chosen by Passion.</p>
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
            <p className="discount">{brand.discount}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryGrid;
