import React from "react";
import ProductBorder from "../ui/ProductBorder";

const Products = ({ children }) => {
  return (
    <div className="cart__products-wrapper">
      <ProductBorder />
      {children}
      <ProductBorder />
    </div>
  );
};

export default Products;
