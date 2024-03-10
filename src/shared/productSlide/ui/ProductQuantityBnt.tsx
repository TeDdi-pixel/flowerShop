import { TypeQuantityBnt } from "./types/types";

const ProductQuantityBnt = ({ onClick, text }: TypeQuantityBnt) => {
  return (
    <button onClick={onClick} type="button" className="product-info__button">
      {text}
    </button>
  );
};

export default ProductQuantityBnt;
