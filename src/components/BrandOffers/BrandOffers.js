// components/BrandOffers/BrandOffers.js
import React from 'react';
import './BrandOffers.css';


const BrandOffers = () => {
  const brands = [
    {
      name: "NIKE",
      discount: "Min 30% off",
      image: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg"
    },
    {
      name: "ADIDAS",
      discount: "Up to 75% off",
      image: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg"
    },
    {
      name: "PUMA",
      discount: "Flat 40% off",
      image: "https://static.vecteezy.com/system/resources/previews/022/076/746/non_2x/puma-logo-and-art-free-vector.jpg"
    },
    // {
    //   name: "ASICS",
    //   discount: "Up to 50% off",
    //   image: "https://logowik.com/content/uploads/images/asics2623.jpg"
    // },
    {
      name: "REDTAPE",
      discount: "Min 30% off",
      image: "https://media.glassdoor.com/sqll/3576359/red-tape-squarelogo-1663674843139.png"
    },
    {
      name: "H&M",
      discount: "Up to 60% off",
      image: "https://upload.wikimedia.org/wikipedia/commons/5/53/H%26M-Logo.svg"
    },
    {
      name: "LEVI'S",
      discount: "Up to 70% off",
      image: "https://toppng.com/uploads/preview/levis-vector-logo-download-free-115740889106rqs5pbhqt.png"
    },
    {
      name: "TOMMY HILFIGER",
      discount: "Flat 40% off",
      image: "https://brandlogos.net/wp-content/uploads/2015/04/tommy_hilfiger_logomark-logo_brandlogos.net_wcw3r.png"
    },
    {
      name: "CALVIN KLEIN",
      discount: "Up to 50% off",
      image: "https://inkbotdesign.com/wp-content/uploads/2024/11/calvin-klein-ck-logo-design-history-1024x683.webp"
    },
    {
      name: "RALPH LAUREN",
      discount: "Min 30% off",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG7SmT8HI0z6h7hs0dx2XIufSX-0gfjMaVaA&s"
    },
    {
      name:"All Brands",
      image:"https://static-00.iconduck.com/assets.00/arrow-right-circle-icon-512x512-2p1e2aaw.png"
    }
  ];


  return (
    <section className="brand-offers">
      <h2 className="section-title-top">TOP BRANDS</h2>
      <p className="section-titlee">At Offers you cant resist</p>
      <div className="brand-grid">
        {brands.map((brand, index) => (
          <div key={index} className="brand-card">
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

export default BrandOffers;