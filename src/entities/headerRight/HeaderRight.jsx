import React from "react";
import cart from "../../assets/icons/cart.svg";
import HeaderIconSearch from "../headerIconSearch/HeaderIconSearch";

const HeaderRight = ({ moneyCount }) => {
  return (
    <div className="header__right">
      <HeaderIconSearch />
      <div className="header__cart-block">
        <img src={cart} alt="cart" style={{ width: "16px" }} />
        <div className="header__money">{`${moneyCount}$`}</div>
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
