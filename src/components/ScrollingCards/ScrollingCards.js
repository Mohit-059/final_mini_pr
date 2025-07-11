import React, { useRef, useEffect } from 'react';
import './ScrollingCards.css';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import logo from '../../assets/sample.jpg'
import drip from '../../assets/sample.jpg'
import logocoll from '../../assets/sample.jpg'




const ScrollingCards = () => {
  const scrollRef = useRef(null);
  const videoRefs = useRef([]); // Create a ref to store video elements
  const sectionRef = useRef(null); // Ref for the section to detect scroll

  const scrollItems = [
    {
      name: "Aman R.",
      feedback: "Didn’t know I needed this until I got it. Now it’s on my desk 24/7.",
      video: "https://res.cloudinary.com/dkybkcox5/video/upload/v1751898751/vid_02_gk5zfy.mp4",
    },
    {
      name: "Aman R.",
      feedback: "Didn’t know I needed this until I got it. Now it’s on my desk 24/7.",
      video: "https://res.cloudinary.com/dkybkcox5/video/upload/v1751898745/vid_01_pdxiex.mp4",

    }, {
      name: "Aman R.",
      feedback: "Didn’t know I needed this until I got it. Now it’s on my desk 24/7.",
      video: "https://res.cloudinary.com/dkybkcox5/video/upload/v1751893470/vid_01_oal6o2.mp4"
    }
  ];

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  const handleVideoPlay = (index) => {
    // Pause all other videos when one starts playing
    videoRefs.current.forEach((video, i) => {
      if (i !== index && video) {
        video.pause();
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          // If the section is not intersecting (scrolled out of view), pause all videos
          videoRefs.current.forEach(video => {
            if (video) {
              video.pause();
            }
          });
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);


  return (
    <section className="horizontal-scroll-section" ref={sectionRef}> {/* Changed wrapper class and added ref */}
      <h2 className="section-title plusnew finaleditoftitle" style={{ marginTop: '-6px' }}>SPOTLIGHT REELS</h2>
      <div className="horizontal-scroll-container" style={{ justifyContent: 'center' }}> {/* Added container */}
        <div className="scroll-cards-wrapper" ref={scrollRef}>
          {scrollItems.map((item, index) => (
            <div key={index} className="scroll-card">
              {/* <img src={item.image} alt={item.title}  /> */}
              <video
                src={item.video}
                className="scroll-image"
                autoPlay
                loop
                infinite
                controls
                ref={el => videoRefs.current[index] = el} // Assign ref to video element
                onPlay={() => handleVideoPlay(index)} // Call handleVideoPlay when video plays
              ></video>
              {/* <div className="scroll-content">
                <h3>{item.feedback}</h3>
                <p>{item.name}</p>
              </div> */}
            </div>
          ))}
        </div>
        <button className="scroll-button left" onClick={scrollLeft} style={{  height: '52px', width: '51px' }}>
          {/* <FiChevronLeft size={24} /> */}
          &lt;
        </button>
        <button className="scroll-button right" onClick={scrollRight} style={{ height: '52px', width: '51px' }}>
          {/* <FiChevronRight size={24} /> */}
          &gt;
        </button>
      </div>
    </section>
  );
};

export default ScrollingCards;