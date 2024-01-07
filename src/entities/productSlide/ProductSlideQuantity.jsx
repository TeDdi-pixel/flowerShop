import React, { useState } from "react";
import ProductQuantityBnt from "../../shared/productSlide/ui/ProductQuantityBnt";

const ProductSlideQuantity = () => {
  const [quantity, setQuantity] = useState(1);
  const handleMinus = () => {
    if (quantity === 0) return;
    else setQuantity((prev) => prev - 1);
  };
  const handlePlus = () => {
    setQuantity((prev) => prev + 1);
  };
  return (
    <div className="product-info__quantity">
      <h4 className="product-info__quantity-title">Quantity</h4>
      <div className="product-info__quantity-block">
        <ProductQuantityBnt onClick={handleMinus} text={"-"} />
        <span>{quantity}</span>
        <ProductQuantityBnt onClick={handlePlus} text={"+"} />
      </div>
    </div>
  );
};

export default ProductSlideQuantity;
