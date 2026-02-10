import React from "react";
import "./App.css";

const ImageSlider = () => {
  return (
    <section className="image-slider">
      <h2 className="slider-heading">Discover Places You’ll Love</h2> <br /> <br/>
      
       <h4 className="slider-text">
        Explore handpicked destinations from around the world and find your next
        unforgettable getaway with us.
    </h4><br /><br />
      <div className="slider-track">
        <img src="/assets/body/tourist1.jpg" alt="" />
        <img src="./assets/body/tourist2.jpg" alt="" />
        <img src="./assets/body/tourist3.jpg" alt="" />
        <img src="./assets/body/tourist4.jpg" alt="" />
        <img src="./assets/body/tourist5.jpg" alt="" />
        <img src="./assets/body/tourist6.jpg" alt="" />
        <img src="./assets/body/tourist7.jpg" alt="" />
        <img src="./assets/body/tourist8.jpg" alt="" />

        {/* duplicate for smooth loop */}
        <img src="/assets/body/tourist1.jpg" alt="" />
        <img src="./assets/body/tourist2.jpg" alt="" />
        <img src="./assets/body/tourist3.jpg" alt="" />
        <img src="./assets/body/tourist4.jpg" alt="" />
        <img src="./assets/body/tourist5.jpg" alt="" />
        <img src="./assets/body/tourist6.jpg" alt="" />
        <img src="./assets/body/tourist7.jpg" alt="" />
        <img src="./assets/body/tourist8.jpg" alt="" />
      </div>
    </section>
  );
};

export default ImageSlider;  // ✅ THIS IS REQUIRED
