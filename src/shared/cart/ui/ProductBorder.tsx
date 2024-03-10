import { TypeProdBorder } from "./types/types";

const ProductBorder = ({ bottom, width }: TypeProdBorder) => {
  return (
    <span
      className="cart__products-border"
      style={{ bottom: bottom, width: width }}
    ></span>
  );
};

export default ProductBorder;
