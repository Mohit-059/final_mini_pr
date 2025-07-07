import React, { useRef } from 'react';
import './ScrollingCards.css';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import logo from '../../assets/sample.jpg'
import drip from '../../assets/sample.jpg'
import logocoll from '../../assets/sample.jpg'




const ScrollingCards = () => {
  const scrollRef = useRef(null);
  const scrollItems = [
  {
    name: "Aman R.",
    feedback: "Didn’t know I needed this until I got it. Now it’s on my desk 24/7.",
    video: "https://res.cloudinary.com/dkybkcox5/video/upload/v1751898751/vid_02_gk5zfy.mp4",
  }



























  ,{
    name: "Aman R.",
    feedback: "Didn’t know I needed this until I got it. Now it’s on my desk 24/7.",
    video: "https://res.cloudinary.com/dkybkcox5/video/upload/v1751898745/vid_01_pdxiex.mp4",
    
  },{
    name: "Aman R.",
    feedback: "Didn’t know I needed this until I got it. Now it’s on my desk 24/7.",
    video:"https://res.cloudinary.com/dkybkcox5/video/upload/v1751893470/vid_01_oal6o2.mp4"
  }
];

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <section className="horizontal-scroll-section"> {/* Changed wrapper class */}
    <h2 className="section-title plusnew finaleditoftitle" style={{marginTop:'-6px'}}>SPOTLIGHT REELS</h2>
      <div className="horizontal-scroll-container" style={{justifyContent:'center'}}> {/* Added container */}
        <div className="scroll-cards-wrapper" ref={scrollRef}>
          {scrollItems.map((item, index) => (
            <div key={index} className="scroll-card">
              {/* <img src={item.image} alt={item.title}  /> */}
              <video src={item.video} className="scroll-image" autoplay loop infinite controls></video>
              {/* <div className="scroll-content">
                <h3>{item.feedback}</h3>
                <p>{item.name}</p>
              </div> */}
            </div>
          ))}
        </div>
        <button className="scroll-button left" onClick={scrollLeft}>
          {/* <FiChevronLeft size={24} /> */}
          &lt;
        </button>
        <button className="scroll-button right" onClick={scrollRight}>
          {/* <FiChevronRight size={24} /> */}
          &gt;
        </button>
      </div>
    </section>
  );
};

export default ScrollingCards;