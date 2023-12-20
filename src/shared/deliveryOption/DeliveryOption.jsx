import React from "react";

const DeliveryOption = ({ title, text, icon }) => {
  return (
    <div className="delivery-option">
      <div className="delivery-option__text-block">
        <h4 className="delivery-option__title">{title}</h4>
        <p className="delivery-option__description">{text}</p>
      </div>
      <div className="delivery-option__icon">
        <img src={icon} alt={icon} />
      </div>
    </div>
  );
};

export default DeliveryOption;
