import React from "react";

const SliderBtnMain = ({ text, status, marginRight,onClick }) => {
  return (
    <button
      className={
        status ? "slider-btn_main slider-btn_main_soledOut" : "slider-btn_main"
      }
      style={{ marginRight: marginRight }}
      onClick={onClick}
    >
      <div className="slider-btn_main__text">{text}</div>
      <span></span>
    </button>
  );
};

export default SliderBtnMain;
