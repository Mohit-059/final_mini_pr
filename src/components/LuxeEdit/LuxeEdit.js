import React from 'react';
import './LuxeEdit.css';
import cargo from '../../assets/luxe_edit/first.png';
import caps from '../../assets/sample.jpg';
import tees from '../../assets/luxe_edit/two.png';
import fcargo from '../../assets/sample.jpg';


import bench from '../../assets/images/benchpress.png'

import coasters from '../../assets/card_images/sledco.png'

import barbell from '../../assets/card_images/barbell.png'

const LuxeEdit = () => {
  const luxeItems = [
    {
      title: "What you lifted is history. What it meant? That’s what we frame.",
      image: "https://minibarbell.com/cdn/shop/files/Barbell-Board---Color-Bumper---1.jpg?v=1749420317"
    },
    {
      title: "That one lift changed you. We just make sure it stays close.",
      image: barbell
    },
    {
      title: "Miss the gym? Keep its mindset on your desk.",
      image: coasters
    },
    {
      title: "Our products aren’t just miniatures — they’re moments frozen in time.",
      image: bench
    }
  ];

  return (
    <section className="luxe-edit">
      <div className="luxe-background">
        <div className="luxe-content">
          <h2 className="luxe-title finalnomargin">GIFT GLORY - CHERISH POWER</h2>
          <p className="luxe-subtitle">MINI EQUIPMENTS. MINI MOMENTS</p>
          <p className="luxe-subtitle">MAX EMOTIONS</p>
        </div>
      </div>
      
      <div className="luxe-grid">
        {luxeItems.map((item, index) => (
          <div key={index} className={`luxe-item ${item.position}`}>
            <img 
              src={item.image} 
              alt={item.title}
              className="luxe-image"
            />
            <div className="luxe-item-title">{item.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LuxeEdit;