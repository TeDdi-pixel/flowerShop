import React from "react";
import { LuSearch } from "react-icons/lu";
import cart from "../../assets/icons/cart.svg";
import HeaderIcon from "../../shared/headerIcon/HeaderIcon";

const HeaderRight = ({ moneyCount }) => {
  return (
    <div className="header__right">
      <HeaderIcon
        icon={<LuSearch style={{ color: "#665F5F", fontSize: "17px" }} />}
      />
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
