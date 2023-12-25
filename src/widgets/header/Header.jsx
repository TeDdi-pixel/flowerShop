import React, { useState } from "react";
import logo from "../../assets/icons/logo.svg";
import HeaderRight from "../../entities/headerRight/HeaderRight";

import HeaderIconMenu from "../../shared/headerIconMenu/HeaderIconMenu.jsx";
import { Link } from "react-router-dom";

const Header = () => {
  const [moneyCount, setMoneyCount] = useState(40.25);

  return (
    <header className="header">
      <div className="header__container">
        <nav className="header__nav">
          <div className="header__left">
            <HeaderIconMenu />
          </div>
          <Link to='/'>
            <img src={logo} alt="logo" className="header__logo" />
          </Link>
          <HeaderRight moneyCount={moneyCount} />
        </nav>
      </div>
    </header>
  );
};

export default Header;
