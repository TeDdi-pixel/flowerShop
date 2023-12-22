import React from "react";

const ChooseUsTitle = ({ title, img }) => {
  return (
    <div className="choose-us__title-wrapper">
      <h4 className="choose-us__title">{title}</h4>
      <img src={img} alt="" />
    </div>
  );
};

export default ChooseUsTitle;
