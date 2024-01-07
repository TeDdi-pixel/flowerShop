import React from "react";

const ProductSlidePrice = ({price}) => {
  return <div className="product-info__price">{`$${price}.00`}</div>;
};

export default ProductSlidePrice;
