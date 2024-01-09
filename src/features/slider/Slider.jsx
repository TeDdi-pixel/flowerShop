import React, { useState, useEffect } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { setIsSliderOpened } from "../../store/slices/productInfoSlice";

const Slider = ({ children, selectedItem }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [startX, setStartX] = useState(0);
  const isSliderOpened = useSelector((state) => state.productInfo.isSliderOpened);
  const dispatch = useDispatch();

  const handleSwipeStart = (event) => {
    setStartX(event.touches[0].clientX);
  };

  const handleSwipeMove = (event) => {
    const moveX = event.touches[0].clientX;
    const diff = startX - moveX;
    if (!isTransitioning && Math.abs(diff) > 50) {
      const direction = diff > 0 ? "next" : "prev";
      switchSlide(direction);
      setStartX(0);
    }
  };

  const switchSlide = (direction) => {
    const nextSlideIndex =
      direction === "prev"
        ? (currentSlide - 1 + children.length) % children.length
        : (currentSlide + 1) % children.length;
    setCurrentSlide(nextSlideIndex);
    setIsTransitioning(true);
  };
  

  useEffect(() => {
    if (isTransitioning) {
      const transitionTimeout = setTimeout(() => {
        setIsTransitioning(false);
      }, 500);

      return () => clearTimeout(transitionTimeout);
    }
  }, [isTransitioning]);
  useEffect(() => {
    if (selectedItem) {
      setCurrentSlide(Number(selectedItem.split("_")[0]));
      setTimeout(() => dispatch(setIsSliderOpened()), 500);
    }
  }, [selectedItem]);
  return (
    <>
      <button
        onClick={() => switchSlide("prev")}
        className="slider-button slider-button-prev"
      >
        <IoIosArrowBack />
      </button>
      <div
        className="slider"
        onTouchStart={handleSwipeStart}
        onTouchMove={handleSwipeMove}
        onTouchEnd={() => setStartX(0)}
      >
        <div
          className="slider__wrapper"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
            transition: isSliderOpened ? `transform 0.5s ease-in-out` : "",
          }}
        >
          {children}
        </div>
      </div>
      <button
        onClick={() => switchSlide("next")}
        className="slider-button slider-button-next"
      >
        <IoIosArrowForward />
      </button>
    </>
  );
};

export default Slider;
