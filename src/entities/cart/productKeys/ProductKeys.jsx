import React from "react";
import ProductKey from "../../../shared/cart/productKey/ProductKey";

const ProductKeys = () => {
  return (
    <div className="cart__product-keys">
      <ProductKey text={"Product"} />
      <div className="cart__product-keys_right">
        <ProductKey text={"Quantity"} />
        <ProductKey text={"Total"} />
      </div>
    </div>
  );
};

export default ProductKeys;
