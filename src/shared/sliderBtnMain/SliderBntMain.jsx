import React from "react";

const SliderBtnMain = ({ text, status, marginRight }) => {
  return (
    <button
      className={
        status ? "slider-btn_main slider-btn_main_soledOut" : "slider-btn_main"
      }
      style={{ marginRight: marginRight }}
    >
      <div className="slider-btn_main__text">{text}</div>
      <span></span>
    </button>
  );
};

export default SliderBtnMain;
