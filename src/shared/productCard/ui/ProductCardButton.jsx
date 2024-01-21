import React from "react";

const ProductCardButton = ({ text, status, addToCart }) => {
  return (
    <button
      className={
        status ? "product-card__button_soledOut" : "product-card__button"
      }
      onClick={() => {
        addToCart();
      }}
    >
      <div className="product-card__button-text">{text}</div>
      <span></span>
    </button>
  );
};

export default ProductCardButton;
