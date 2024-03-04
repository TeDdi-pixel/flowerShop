import React, { useState } from "react";
import ProductQuantityBnt from "../../shared/productSlide/ui/ProductQuantityBnt";

const Quantity = ({ title, titleMargin, height, maxWidth }) => {
  const [quantity, setQuantity] = useState(1);
  const minus = () => {
    if (quantity > 1) setQuantity((prev) => (prev -= 1));
  };
  const plus = () => {
    setQuantity((prev) => (prev += 1));
  };

  return (
    <div className="product-info__quantity" style={{ maxWidth: maxWidth }}>
      <h4
        className="product-info__quantity-title"
        style={{ marginBottom: titleMargin }}
      >
        {title}
      </h4>
      <div className="product-info__quantity-block" style={{ height: height }}>
        <ProductQuantityBnt onClick={minus} text={"-"} />
        <span className="product-info__quantity-block-text">{quantity}</span>
        <ProductQuantityBnt onClick={plus} text={"+"} />
      </div>
    </div>
  );
};

export default Quantity;
