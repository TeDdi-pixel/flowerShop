import React from "react";
import cart from "../../assets/icons/cart.svg";
import HeaderIconSearch from "../../shared/headerIconSearch/HeaderIconSearch";
import useWindowResize from "../../hooks/useWindowResize";

const HeaderRight = ({ moneyCount }) => {
  const { isFullWidth } = useWindowResize(525);
  return (
    <div className="header__right">
      <HeaderIconSearch />
      <div className="header__cart-block">
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
      </div>
    </div>
  );
};

export default HeaderRight;
