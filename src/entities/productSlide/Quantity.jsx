import React from "react";
import ProductQuantityBnt from "../../shared/productSlide/ui/ProductQuantityBnt";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../../store/slices/quantitySlice";

const Quantity = () => {
  const quantity = useSelector((state) => state.quantity.value);
  const dispatch = useDispatch();
  return (
    <div className="product-info__quantity">
      <h4 className="product-info__quantity-title">Quantity</h4>
      <div className="product-info__quantity-block">
        <ProductQuantityBnt onClick={() => dispatch(remove())} text={"-"} />
        <span>{quantity}</span>
        <ProductQuantityBnt onClick={() => dispatch(add())} text={"+"} />
      </div>
    </div>
  );
};

export default Quantity;
