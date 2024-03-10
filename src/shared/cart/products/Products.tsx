import { ReactNode } from "react";
import ProductBorder from "../ui/ProductBorder";

const Products = ({ children }: { children: ReactNode }) => {
  return (
    <div className="cart__products-wrapper">
      <ProductBorder />
      {children}
      <ProductBorder />
    </div>
  );
};

export default Products;
