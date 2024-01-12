import React from "react";

const ProductPrice = ({ price, marginBottom, fontSize }) => {
  return (
    <div
      className="cart__product-price"
      style={{ marginBottom: marginBottom, fontSize: fontSize }}
    >{`$${price}.00`}</div>
  );
};

export default ProductPrice;
