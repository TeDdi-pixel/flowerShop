import React from "react";
import EmptyCartMessage from "../../../shared/cart/emptyCartMessage/EmptyCartMessage";
import { useSelector } from "react-redux";
import CookiesMessage from "../../../shared/cart/cookiesMassage/CookiesMessage";
import ShoppingBtn from "../../../shared/cart/shoppingBtn/ShoppingBtn";

const EmptyCart = () => {
  const cookiesEnabled = useSelector((state) => state.cart.cookiesEnabled);
  return (
    <div className="cart__empty">
      <EmptyCartMessage />
      {!cookiesEnabled ? <CookiesMessage /> : null}
      <ShoppingBtn />
    </div>
  );
};

export default EmptyCart;
