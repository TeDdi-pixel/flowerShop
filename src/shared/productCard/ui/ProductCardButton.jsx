import React from "react";

const ProductCardButton = ({ text, status }) => {
  return (
    <button
      className={
        status ? "product-card__button_soledOut" : "product-card__button"
      }
    >
      <div className="product-card__button-text">{text}</div>
      <span></span>
    </button>
  );
};

export default ProductCardButton;
