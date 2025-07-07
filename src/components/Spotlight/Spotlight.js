// components/Spotlight/Spotlight.js
import React from 'react';
import './Spotlight.css';

const Spotlight = () => {
  const spotlightBrands = [
    { 
      name: `"Didn’t know I needed this until I got it. Now it’s on my desk 24/7."`, 
      discount: "-Abhinav R.", 
      description: "Verified Purchase" 
    },
    { 
      name: `"Wasn’t even lifting serious yet — but this made me start tracking."`, 
      discount: "-ANUPAM M.", 
      description: "Verified Purchase" 
    },
    { 
      name: `"Looks aesthetic, feels meaningful. Not just decor — it’s motivation."`, 
      discount: "-PIYUSH" 
    }
  ];

  return (
    <section className="spotlight">
      <h2 className="section-title plusnew" style={{marginTop:'-33px'}}>TESTIMONIALS</h2>
      <div className="spotlight-gridd">
        {spotlightBrands.map((brand, index) => (
          <div key={index} className="spotlight-card">
            <h3>{brand.name}</h3>
            <p className="discount">{brand.discount}</p>
            <p className="description" style={{color:'white'}}>{brand.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Spotlight;