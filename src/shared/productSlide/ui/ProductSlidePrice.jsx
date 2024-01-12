import React from "react";

const ProductSlidePrice = ({ price, marginBottom }) => {
  return (
    <div
      className="product-info__price"
      style={{ marginBottom: marginBottom }}
    >{`$${price}.00`}</div>
  );
};

export default ProductSlidePrice;
