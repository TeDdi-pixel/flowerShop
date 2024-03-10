import TrashCan from "../../../shared/cart/ui/TrashCan";
import ProductQuantityBnt from "../../../shared/productSlide/ui/ProductQuantityBnt";
import { TypeQuantityBlock } from "../types/types";

const QuantityBlock = ({
  minus,
  plus,
  quantity,
  handleRemoveFromCart,
}: TypeQuantityBlock) => {
  return (
    <div className="cart__product-quantity">
      <div className="product-info__quantity-block">
        <ProductQuantityBnt onClick={minus} text={"-"} />
        <span className="product-info__quantity-block-text">{quantity}</span>
        <ProductQuantityBnt onClick={plus} text={"+"} />
      </div>
      <TrashCan onClick={handleRemoveFromCart} />
    </div>
  );
};

export default QuantityBlock;
