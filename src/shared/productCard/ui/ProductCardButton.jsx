import React from "react";

const ProductCardButton = ({ text }) => {
  return (
    <button className="product-card__button">
      <div className="product-card__button-text">{text}</div>
      <span></span>
    </button>
  );
};

export default ProductCardButton;
