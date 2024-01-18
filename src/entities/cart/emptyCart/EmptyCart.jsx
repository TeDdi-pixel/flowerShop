import React from "react";
import EmptyCartMessage from "../../../shared/cart/emptyCartMessage/EmptyCartMessage";
import { useDispatch, useSelector } from "react-redux";
import CookiesMessage from "../../../shared/cart/cookiesMassage/CookiesMessage";
import ShoppingBtn from "../../../shared/cart/shoppingBtn/ShoppingBtn";
import { enableCookies } from "../../../store/slices/cookiesSlice";
import CookiesBtn from "../../../shared/cookiesText/CookiesBtn";
import { setUserData } from "../../../store/slices/userSlice";
import { updateCart } from "../../../store/slices/cartSlice";

const EmptyCart = () => {
  const cookiesEnabled = useSelector((state) => state.cookies.cookiesEnabled);
  const storageUserData = useSelector((state) => state.user.storageUserData);
  const cartData = useSelector((state) => state.cart.cartData);
  const dispatch = useDispatch();
  const enableCookiesData = () => {
    dispatch(enableCookies());
    if (storageUserData) {
      dispatch(setUserData(storageUserData?.user?.uid));
      dispatch(updateCart(cartData));
    }
  };

  return (
    <div className="cart__empty">
      <EmptyCartMessage />
      {!cookiesEnabled ? (
        <div className="cart__empty-cookies-wrapper">
          <CookiesMessage />
          <CookiesBtn
            enableCookies={enableCookiesData}
            backgroundColor={"#665f5f"}
            color={"white"}
          />
        </div>
      ) : null}
      <ShoppingBtn />
    </div>
  );
};

export default EmptyCart;
