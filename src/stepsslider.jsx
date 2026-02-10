import React, { useRef, useEffect, useState } from "react";
import "./App.css";

const StepsSlider = () => {
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollToIndex = (index) => {
    const slider = sliderRef.current;
    if (!slider) return;
    const cards = slider.querySelectorAll(".step-card");
    if (cards[index]) {
      slider.scrollTo({ left: cards[index].offsetLeft, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    const slider = sliderRef.current;
    if (!slider) return;
    const cards = slider.querySelectorAll(".step-card");
    const nextIndex = currentIndex + 1 >= cards.length ? 0 : currentIndex + 1;
    setCurrentIndex(nextIndex);
    scrollToIndex(nextIndex);
  };

  const scrollLeft = () => {
    const slider = sliderRef.current;
    if (!slider) return;
    const cards = slider.querySelectorAll(".step-card");
    const prevIndex = currentIndex - 1 < 0 ? cards.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
    scrollToIndex(prevIndex);
  };


  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     scrollRight();
  //   }, 2000);

  //   return () => clearInterval(interval);
  // }, [currentIndex]);

  useEffect(() => {
  const slider = sliderRef.current;
  if (!slider) return;

  const imgs = slider.querySelectorAll("img");
  let loadedCount = 0;

  const checkAllLoaded = () => {
    loadedCount++;
    if (loadedCount === imgs.length) {
      // start auto-scroll only after all images loaded
      const interval = setInterval(scrollRight, 2000);
      return () => clearInterval(interval); // clear on unmount
    }
  };

  imgs.forEach(img => {
    if (img.complete) checkAllLoaded();
    else img.addEventListener("load", checkAllLoaded);
  });
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
