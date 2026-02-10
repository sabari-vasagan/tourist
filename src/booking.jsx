import React from "react";
import "./App.css";

const ToursSection = () => {
  return (
    <section className="tours-section">
      <div className="tours-container">

        <div className="tour-card">
          <img src="./assets/booking/falls.jpg" />
          <div className="tour-content">
            <div className="tour-header">
              <h3>Swiss Alps Explorer</h3>
              
            </div>
            <p>
              Experience breathtaking alpine views, scenic train rides, and cozy mountain stays.
            </p>
            <button className="tour-btn">Book Tour Now</button>
          </div>
        </div>

        <div className="tour-card">
          <img src="./assets/booking/falls2.jpg" />
          <div className="tour-content">
            <div className="tour-header">
              <h3>Bali Bliss</h3>
              
            </div>
            <p>
              Relax on tropical beaches, enjoy sunsets, and explore Bali’s vibrant culture.
            </p>
            <button className="tour-btn">Book Tour Now</button>
          </div>
        </div>

        <div className="tour-card">
          <img src="./assets/booking/taj.jpg" />
          <div className="tour-content">
            <div className="tour-header">
              <h3>Cappadocia Dreams</h3>
             
            </div>
            <p>
              Soar in a hot air balloon, explore ancient caves, and enjoy Turkish hospitality.
            </p>
            <button className="tour-btn">Book Tour Now</button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ToursSection;
