import React from "react";

const SliderBtnMain = ({ text, status }) => {
  return (
    <button
      className={
        status ? "slider-btn_main slider-btn_main_soledOut" : "slider-btn_main"
      }
    >
      <div className="slider-btn_main__text">{text}</div>
      <span></span>
    </button>
  );
};

export default SliderBtnMain;
