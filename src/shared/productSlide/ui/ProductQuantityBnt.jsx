import React from "react";

const ProductQuantityBnt = ({ onClick, text }) => {
  return (
    <button onClick={onClick} type="button" className="product-info__button">
      {text}
    </button>
  );
};

export default ProductQuantityBnt;
