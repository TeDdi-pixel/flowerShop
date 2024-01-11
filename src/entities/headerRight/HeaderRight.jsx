import React from "react";
import cart from "../../assets/icons/cart.svg";
import HeaderIconSearch from "../../shared/headerIconSearch/HeaderIconSearch";
import useWindowResize from "../../hooks/useWindowResize";
import { Link } from "react-router-dom";
import GoogleLogin from "../../widgets/googleLogin/GoogleLogin";

const HeaderRight = ({ moneyCount }) => {
  const { isFullWidth } = useWindowResize(525);
  return (
    <div className="header__right">
      <GoogleLogin />
      <HeaderIconSearch />
      <Link to="/Home/Cart" className="header__cart-block">
        <img src={cart} alt="cart" style={{ width: "16px" }} />
        {isFullWidth ? null : (
          <div className="header__money">{`${moneyCount}$`}</div>
        )}
        <div
          className={
            moneyCount != 0
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
