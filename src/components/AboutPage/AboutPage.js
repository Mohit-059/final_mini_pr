import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about">
      <div className="about-container">
        <h1 className="about-title">
          ABOUT <span className="highlight">THE MINI PR</span>
        </h1>
        <p className="about-text">
          The idea of <span className="highlight">mini gym inspired collectibles </span> 
          isn’t entirely new — and we fully acknowledge that.  
          The passion has always been there. What we’re adding is a way to share it with more people — with affordability and <span className="highlight"> community </span>at the core.
        </p>
        <p className="about-text">
          While others only thought of collectibles, we saw a chance to make these milestones <span className="highlight">accessible </span>, fun, and meaningful.  
          Steel rods are tough, but expensive.<span className="highlight"> PLA </span>material?  
          It does the job, it’s comparatively affordable, and it brings this passion within reach 
          of every <span className="highlight">fitness enthusiast </span>, especially in India.
        </p>
        <p className="about-text">
          This is only the beginning. We’re <span className="highlight">testing waters </span>, 
          but with your support we’ll soon expand into steel and beyond.  
          Because that’s what our <span className="highlight">gym community </span> 
          is built on — <span className="highlight">support, strength, and shared love for the grind</span>.  
        </p>
        <p className="closing-line">
          Together, we’ll <span className="gold">gift glory</span> and 
          <span className="gold"> cherish power</span>.
        </p>
      </div>
    </section>
  );
};

export default About;
