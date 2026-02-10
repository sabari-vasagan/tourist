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


  useEffect(() => {
    const interval = setInterval(() => {
      scrollRight();
    }, 2000);

    return () => clearInterval(interval);
  }, [currentIndex]);
