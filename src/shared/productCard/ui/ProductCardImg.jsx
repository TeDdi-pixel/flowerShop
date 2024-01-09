import React from "react";

const ProductCardImg = ({ img, onClick }) => {
  return (
    <img src={img} alt={img} className="product-card__img" onClick={onClick} />
  );
};

export default ProductCardImg;
