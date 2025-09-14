import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './LuxeEdit.css';
import cargo from '../../assets/luxe_edit/first.png';
import caps from '../../assets/sample.jpg';
import tees from '../../assets/luxe_edit/two.png';
import fcargo from '../../assets/sample.jpg';


import luxeEdit1 from '../../assets/images/LuxeEdit.jpg'
import luxeEdit2 from '../../assets/images/LuxeEdit1.jpg'
import luxeEdit from '../../assets/images/newtry.jpg'

// import coasters from '../../assets/card_images/sledco.png'

// import LuxeEdit4 from '../../assets/images/LuxeEdit4.jpg'

// import barbell from '../../assets/card_images/barbell.png'

const LuxeEdit = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const luxeItems = [
    {
      title: "What you lifted is history. What it meant? That’s what we frame.",
      image: "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757832316/Gemini_Generated_Image_6v91le6v91le6v91_-_Edited_-_Edited_1_nnkngr.png"
    },
    {
      title: "That one lift changed you. We just make sure it stays close.",
      image: "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757801310/ob_009_xcjf9m.jpg"
    },{
      title: "Miss the gym? Keep its mindset on your desk.",
      image: "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757834040/flipped_gbce4u.jpg"
    },

    {
      title: "Our products aren’t just miniatures — they’re moments frozen in time.",
      image: "https://res.cloudinary.com/dr55mgsnm/image/upload/v1757802237/d_001_f402l1.jpg"
    }
  ];

  // Function to handle navigation and scroll to top
  const handleNavigateToProducts = () => {
    navigate('/products');
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

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
          <div
            key={index}
            className={`luxe-item ${item.position}`}
            onClick={handleNavigateToProducts} // Add onClick handler here
            style={{ cursor: 'pointer' }} // Add cursor style to indicate clickability
          >
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
