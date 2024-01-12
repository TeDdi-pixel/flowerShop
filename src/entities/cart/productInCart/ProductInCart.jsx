import React, { useState } from "react";
import ProductImg from "../../../shared/cart/ui/ProductImg";
import SizeTitle from "../../../shared/productSlide/sizeUi/SizeTitle";
import ProductTitle from "../../../shared/cart/ui/ProductTitle";
import ProductPrice from "../../../shared/cart/ui/ProductPrice";
import useWindowResize from "../../../hooks/useWindowResize";
import TrashCan from "../../../shared/cart/ui/TrashCan";
import ProductQuantityBnt from "../../../shared/productSlide/ui/ProductQuantityBnt";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  totalAdd,
  totalRemove,
} from "../../../store/slices/cartSlice";
import { removeProductFromCart } from "../../../services/removeProductFromCart";

const ProductInCart = ({ img, title, price, id }) => {
  const [quantity, setQuantity] = useState(1);
  const { isFullWidth } = useWindowResize(695);
  const [productTotalPrice, setproductTotalPrice] = useState(price);
  const dispatch = useDispatch();
  const uid = useSelector((state) => state.user.userData);

  const minus = () => {
    if (quantity > 0) {
      setQuantity((prev) => (prev -= 1));
      dispatch(totalRemove(price));
      setproductTotalPrice((prev) => (prev -= price));
    }
  };
  const plus = () => {
    setQuantity((prev) => (prev += 1));
    dispatch(totalAdd(price));
    setproductTotalPrice((prev) => (prev += price));
  };

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart({ id }));
    removeProductFromCart(uid, id);
  };

  const quantityBlock = (
    <div className="cart__product-quantity">
      <div className="product-info__quantity-block">
        <ProductQuantityBnt onClick={minus} text={"-"} />
        <span className="product-info__quantity-block-text">{quantity}</span>
        <ProductQuantityBnt onClick={plus} text={"+"} />
      </div>
      <TrashCan onClick={handleRemoveFromCart} />
    </div>
  );
  return (
    <div className="cart__product">
      <div className="cart__product_left">
        <ProductImg img={img} />
        <div className="cart__product-info">
          <ProductTitle title={title} />
          <ProductPrice
            price={price}
            marginBottom={isFullWidth ? "4px" : "11px"}
          />
          <SizeTitle text={"Size:"} fontSize={"12px"} />
          {isFullWidth ? quantityBlock : null}
        </div>
      </div>
      {isFullWidth ? null : (
        <div className="cart__product_right">
          {quantityBlock}
          <ProductPrice price={productTotalPrice} />
        </div>
      )}
    </div>
  );
};

export default ProductInCart;
