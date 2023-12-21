import React from "react";
import logo from "../../assets/icons/logo.svg";
import HeaderRight from "../../entities/headerRight/HeaderRight";

import HeaderIconMenu from "../../shared/headerIconMenu/HeaderIconMenu.jsx";

const Header = () => {
  let moneyCount = 40.25;
  return (
    <header className="header">
      <div className="header__container">
        <nav className="header__nav">
          <div className="header__left">
            <HeaderIconMenu />
          </div>
          <img src={logo} alt="logo" className="header__logo" />
          <HeaderRight moneyCount={moneyCount} />
        </nav>
      </div>
    </header>
  );
};

export default Header;
