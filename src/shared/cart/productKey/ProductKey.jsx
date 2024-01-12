import React from "react";

const ProductKey = ({ text, marginLeft, isFullWidth }) => {
  return (
    <div
      className="cart__product-key"
      style={{ marginLeft: isFullWidth ? "0px" : marginLeft }}
    >
      {text}
    </div>
  );
};

export default ProductKey;
