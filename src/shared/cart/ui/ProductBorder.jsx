import React from "react";

const ProductBorder = ({ bottom, width }) => {
  return (
    <span
      className="cart__products-border"
      style={{ bottom: bottom, width: width }}
    ></span>
  );
};

export default ProductBorder;
