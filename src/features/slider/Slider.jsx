import React, { useEffect, useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const Slider = ({ children, selectedItem }) => {
  const [currentSlide, setCurrentSlide] = useState(selectedItem);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const nextSlide = () => {
    if (!isTransitioning) {
      setCurrentSlide((currentSlide + 1) % children.length);
      setIsTransitioning(true);
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setCurrentSlide((currentSlide - 1 + children.length) % children.length);
      setIsTransitioning(true);
    }
  };
  // useEffect(() => {
  //   if (selectedItem !== -1) {
  //     setCurrentSlide(selectedItem);
  //     console.log(currentSlide);
  //   }
  // }, [selectedItem]);
  
  useEffect(() => {
    if (isTransitioning) {
      const transitionTimeout = setTimeout(() => {
        setIsTransitioning(false);
      }, 500);

      return () => clearTimeout(transitionTimeout);
    }
  }, [isTransitioning]);

  return (
    <>
      <button onClick={prevSlide} className="slider-button slider-button-prev">
        <IoIosArrowBack />
      </button>
      <div className="slider"
      >
        <div
          className="slider__wrapper"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {children}
        </div>
      </div>
      <button onClick={nextSlide} className="slider-button slider-button-next">
        <IoIosArrowForward />
      </button>
    </>
  );
};

export default Slider;
