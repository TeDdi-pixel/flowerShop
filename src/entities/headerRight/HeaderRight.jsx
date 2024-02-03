import React from "react";
import HeaderIconSearch from "../../shared/headerIconSearch/HeaderIconSearch";
import useWindowResize from "../../hooks/useWindowResize";
import { Link } from "react-router-dom";
import GoogleLogin from "../../features/header/googleLogin/GoogleLogin";
import { useSelector } from "react-redux";
import { RiShoppingCartLine } from "react-icons/ri";

const HeaderRight = () => {
  const { isFullWidth } = useWindowResize(525);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  
  return (
    <div className="header__right">
      <GoogleLogin />
      <HeaderIconSearch />
      <Link
        to="/Home/Cart"
        className="header__cart-block"
      >
        <RiShoppingCartLine
          style={{ height: "16px", width: "16px", color: "#665f5f" }}
        />
        {isFullWidth ? null : (
          <div className="header__money">{`${totalPrice}$`}</div>
        )}
        <div
          className={
            totalPrice != 0
              ? "header__cart-alert-sign"
              : "header__cart-alert-sign_hidden"
          }
        >
          <span></span>
        </div>
      </Link>
    </div>
  );
};

export default HeaderRight;
