import React from "react";
import EmptyCartMessage from "../../../shared/cart/emptyCartMessage/EmptyCartMessage";
import { useDispatch, useSelector } from "react-redux";
import CookiesMessage from "../../../shared/cart/cookiesMassage/CookiesMessage";
import ShoppingBtn from "../../../shared/cart/shoppingBtn/ShoppingBtn";
import { enableCookies } from "../../../store/slices/cookiesSlice";
import Cookies from "js-cookie";
import CookiesBtn from "../../../shared/cookiesText/CookiesBtn";

const EmptyCart = () => {
  const cookiesEnabled = useSelector((state) => state.cookies.cookiesEnabled);
  const userData = useSelector((state) => state.user.userLocalStorageData);
  const dispatch = useDispatch();
  cookiesEnabled && userData.user
    ? Cookies.set("user", JSON.stringify(userData.user.uid))
    : false;

  return (
    <div className="cart__empty">
      <EmptyCartMessage />
      {!cookiesEnabled ? (
        <div className="cart__empty-cookies-wrapper">
          <CookiesMessage />
          <CookiesBtn
            enableCookies={() => dispatch(enableCookies())}
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
