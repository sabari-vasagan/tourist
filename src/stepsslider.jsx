import React, { useRef, useEffect } from "react";
import "./App.css";

const StepsSlider = () => {
  const sliderRef = useRef(null);

  const getScrollAmount = () => {
    const slider = sliderRef.current;
    if (!slider) return 0;
    const firstCard = slider.querySelector(".step-card");
    if (!firstCard) return 0;
    const gap = 24; 
    return firstCard.offsetWidth + gap;
  };

  const scrollRight = () => {
    const slider = sliderRef.current;
    if (!slider) return;

    const scrollAmount = getScrollAmount();
    const maxScrollLeft = slider.scrollWidth - slider.clientWidth;

    // Infinite loop effect
    if (slider.scrollLeft >= maxScrollLeft - scrollAmount / 2) {
      slider.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      slider.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const scrollLeft = () => {
    const slider = sliderRef.current;
    if (!slider) return;

    const scrollAmount = getScrollAmount();
    const maxScrollLeft = slider.scrollWidth - slider.clientWidth;

    if (slider.scrollLeft <= 5) {
      slider.scrollTo({ left: maxScrollLeft, behavior: "smooth" });
    } else {
      slider.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };


  useEffect(() => {
    const interval = setInterval(scrollRight, 1000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="steps-section">
      <h2 className="stepheading">
        Reserve your trip effortlessly by following these easy steps.
      </h2>

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
