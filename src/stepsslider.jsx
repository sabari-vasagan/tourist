import React, { useRef, useEffect } from "react";
import "./App.css";

const StepsSlider = () => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -650, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 650, behavior: "smooth" });
    }
  };

  // Auto move every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.scrollBy({ left: 650, behavior: "smooth" });
      } 
      

    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="steps-section">
      <h2 className="stepheading">Reserve your trip effortlessly by following these easy steps.</h2>
      <div className="steps-container" ref={sliderRef}>
        <div className="step-card">
          <div className="step-text">
         <h1 className="step-number">01</h1>
           <h3>Himalaya</h3>
            <p>Explore the majestic Himalayas with stunning views and cool climate.</p>
          </div>
          <img src="./assets/stepsslider/himalaya.jpg" alt="Himalaya" />
        </div>

        <div className="step-card">
          <div className="step-text">
            <h1 className="step-number">02</h1>
            <h3>Goa</h3>
            <p>Enjoy the vibrant beaches of Goa with golden sands and nightlife.</p>
          </div>
          <img src="./assets/stepsslider/goa.jpg" alt="Goa" />
        </div>

        <div className="step-card">
          <div className="step-text">
             <h1 className="step-number">03</h1>
            <h3>Amazon</h3>
            <p>Experience the magic of the Amazon rainforest and its wonders.</p>
          </div>
          <img src="./assets/stepsslider/amazon.jpg" alt="Amazon" />
        </div>

        <div className="step-card">
          <div className="step-text">
            <h1 className="step-number">04</h1>
            <h3>Temple</h3>
            <p>Visit ancient temples to experience peace and spirituality.</p>
          </div>
          <img src="./assets/stepsslider/temple.jpg" alt="Temple" />
        </div>
      </div>

      <div className="slider-controls">
        <button onClick={scrollLeft} className="arrow-btn">‹</button>
        <button onClick={scrollRight} className="arrow-btn dark">›</button>
      </div>
    </section>
  );
};

export default StepsSlider;
