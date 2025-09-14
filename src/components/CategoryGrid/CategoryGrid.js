import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CategoryGrid.css';

import one from '../../assets/card_images/barbell.png';
import sled from '../../assets/card_images/sled333.jpg';
import bench from '../../assets/card_images/bench.png';
import accessories from '../../assets/card_images/accessories2.png';
import benchh from '../../assets/card_images/finalll.jpg';
import plates from '../../assets/card_images/plates.png';

const CategoryGrid = () => {
  const navigate = useNavigate();

  const brands = [
    {
      name: "PR-TRACKERS",
      discount: "Mini setups to track your Personal Records",
      image: "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757802252/d_013_jmqy1w.jpg"
    },
    {
      name: "GYM-INSPIRED ESSENTIALS",
      discount: "Useful everyday items redesigned",
      image: "https://res.cloudinary.com/dkybkcox5/image/upload/v1751921667/sled333_rlng7b.jpg"
    },
    {
      name: "ACCESSORIES",
      image: "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757800988/h_02_bhknps.jpg",
      discount:"Mini Accessories for your mini PR trackers"
    },
    // {
    //   name: "LIMITED TIME COMBO DEALS",
    //   discount: "Special Combos for you, make your money worth",
    //   image: "https://res.cloudinary.com/dkybkcox5/image/upload/v1751921715/barbell_plates_08_b243s4.jpg"
    // },
    {
      name:"EXTRAS",
      image: "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757801774/b_001_lfcc5b.jpg"
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
            onClick={() => {
        navigate('/products');
        window.scrollTo(0, 0); // This line is added to scroll to the top
      }}
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
