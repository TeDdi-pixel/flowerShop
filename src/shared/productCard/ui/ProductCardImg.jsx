import React from "react";

const ProductCardImg = ({ img, onClick }) => {
  return (
    <img
      src={img}
      alt="Bouquet"
      className="product-card__img"
      onClick={onClick}
    />
  );
};

export default ProductCardImg;
