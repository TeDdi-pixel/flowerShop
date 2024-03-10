import { TypeProductPrice } from "./types/types";

const ProductPrice = ({ price, marginBottom, fontSize }: TypeProductPrice) => {
  return (
    <div
      className="cart__product-price"
      style={{ marginBottom: marginBottom, fontSize: fontSize }}
    >{`$${price}.00`}</div>
  );
};

export default ProductPrice;
