import React from "react";
import EmptyCartMessage from "../../../shared/cart/emptyCartMessage/EmptyCartMessage";
import { useDispatch, useSelector } from "react-redux";
import CookiesMessage from "../../../shared/cart/cookiesMassage/CookiesMessage";
import ShoppingBtn from "../../../shared/cart/shoppingBtn/ShoppingBtn";
import { enableCookies } from "../../../store/slices/cookiesSlice";
import CookiesBtn from "../../../shared/cookiesText/CookiesBtn";
import { setUserCookies } from "../../../services/setters/setUserCookies";

const EmptyCart = () => {
  const cookiesEnabled = useSelector((state) => state.cookies.cookiesEnabled);
  const userData = useSelector((state) => state.user.userLocalStorageData);
  const dispatch = useDispatch(); 
  setUserCookies(cookiesEnabled,userData);

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
