import React from "react";
import Navbar from "./navbar";
import Hero from "./hero";
import ImageSlider from "./sliderimg";
import StepsSlider from "./stepsslider";
import ToursSection from"./booking";
import "./App.css";

function App() {
  
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <ImageSlider/>
      <StepsSlider/>
      <ToursSection/>
    </div>
  );
}

export default App;
