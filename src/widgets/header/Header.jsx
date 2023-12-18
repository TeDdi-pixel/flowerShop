import React from "react";
import logo from "../../assets/icons/logo.svg";
import HeaderRight from "../../entities/headerRight/HeaderRight";
import HeaderIcon from "../../shared/headerIcon/HeaderIcon";
import { CgMenuLeft } from "react-icons/cg";

const Header = () => {
  let moneyCount = 0;
  return (
    <header className="header">
      <div className="header__container">
        <nav className="header__nav">
          <div className="header__left">
            <HeaderIcon
              icon={
                <CgMenuLeft style={{ fontSize: "20px", color: "#665F5F" }} />
              }
            />
          </div>
          <img src={logo} alt="logo" className="header__logo" />
          <HeaderRight moneyCount={moneyCount} />
        </nav>
      </div>
    </header>
  );
};

export default Header;
