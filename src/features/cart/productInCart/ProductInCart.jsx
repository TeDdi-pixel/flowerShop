import React, { useEffect, useState } from "react";
import ProductImg from "../../../shared/cart/ui/ProductImg";
import SizeTitle from "../../../shared/productSlide/sizeUi/SizeTitle";
import ProductTitle from "../../../shared/cart/ui/ProductTitle";
import ProductPrice from "../../../shared/cart/ui/ProductPrice";
import useWindowResize from "../../../hooks/useWindowResize";
import TrashCan from "../../../shared/cart/ui/TrashCan";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  setTotalPrice,
  totalAdd,
  totalRemove,
  updateCart,
} from "../../../store/slices/cartSlice";
import { removeProductFromCart } from "../../../services/removeProductFromCart";
import { setUserCart } from "../../../services/setters/setUserCart";
import useCart from "../../../hooks/useCart";
import { calculateTotalPrice } from "../../../helpers/calculateTotalPrice";
import ProductQuantityBnt from "../../../shared/productSlide/ui/ProductQuantityBnt";
import { saveToCookies } from "../../../helpers/browserActions";

const ProductInCart = ({ img, title, price, id, initialQuantity }) => {
  const [quantity, setQuantity] = useState(initialQuantity);
  const [productTotalPrice, setProductTotalPrice] = useState(
    price * initialQuantity
  );
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const { isFullWidth } = useWindowResize(695);
  const dispatch = useDispatch();
  const uid = useSelector((state) => state.user.userData);
  const { cartData } = uid ? useCart("userCarts", uid) : null;

  const setCookies = (updatedCartData) => {
    saveToCookies("cart", updatedCartData);
    saveToCookies("totalPrice", totalPrice);
  };

  useEffect(() => {
    if (cartData) {
      const updatedCartData = cartData.map((item) => {
        if (item.id === id && quantity > 0) {
          return { ...item, quantity: quantity };
        } else {
          return item;
        }
      });
      dispatch(updateCart(updatedCartData));
      setUserCart(uid, updatedCartData);
      setCookies(updatedCartData);
      dispatch(setTotalPrice(calculateTotalPrice(updatedCartData)));
    }
  }, [quantity]);

  const minus = async () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      dispatch(totalRemove(price));
      setProductTotalPrice((prev) => (prev -= price));
    }
  };
  const plus = async () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    dispatch(totalAdd(price));
    setProductTotalPrice((prev) => (prev += price));
  };

  const handleRemoveFromCart = () => {
    const removedPrice = price * quantity;
    dispatch(totalRemove(removedPrice));
    dispatch(removeFromCart({ id }));
    removeProductFromCart(uid, id);

    if (cartData.length === 1) {
      dispatch(setTotalPrice(0));
    }
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
