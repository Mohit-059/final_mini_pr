import React from 'react';
import './HiddenGems.css';
import rtboots from '../../assets/sample.jpg';

const HiddenGems = () => {
  const luxeItems = [
    {
      title: "ASICS GEL-1130 Sneakers",
      image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSkKaXMBqSB1XobZ-u3APy9i_INgF49OU6X6gMh4ijBxv-t6ltuhJn8cx0TlfQKoakCcsXgPuEMZKHcL9DAMfJ1YvYIu36AMV46ZHpgTjsqH7YXEhldc6c4_B9XhJDvqMmdKnkjaSg&usqp=CAc",
      position: "top-left"
    },{
      title: "RALPH LAUREN Cotton Cap ",
      image: "https://www.eqvvs.co.uk/cdn/shop/files/710548524_300x.jpg?v=1698924707",
      position: "bottom-left"
    },
    {
      title: "LEVI’S Vintage Fit Graphic",
      image: "https://lsco.scene7.com/is/image/lsco/873730144-front-pdp?fmt=jpeg&qlt=70&resMode=sharp2&fit=crop,1&op_usm=0.6,0.6,8&wid=2000&hei=2500",
      position: "top-right"
    },
    
    {
      title: "REDTAPE Chelsea Boots",
      image: rtboots,
      position: "bottom-right"
    }
  ];

  return (
    <section className="luxe-edit">
      <div className="luxe-background">
        <div className="luxe-content">
          <h2 className="luxe-title">HIDDEN GEMS</h2>
          <p className="luxe-subtitle">Lowkey fire you won’t find twice.</p>
          <p className="luxe-subtitle">No Cap!</p>
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

export default HiddenGems;