import React, { useEffect, useState } from "react";
import logo from "../../assets/icons/logo.svg";
import HeaderRight from "../../entities/headerRight/HeaderRight";
import HeaderIconMenu from "../../shared/headerIconMenu/HeaderIconMenu.jsx";
import { Link } from "react-router-dom";
import BurgerMenu from "../burgerMenu/BurgerMenu.jsx";

const Header = () => {
  const [moneyCount, setMoneyCount] = useState(40.25);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleBurgerMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  return (
    <header className="header header_scrolled">
      <div className="header__container">
        <nav className="header__nav header__nav_scrolled">
          <div className="header__left">
            <HeaderIconMenu onClick={handleBurgerMenu} />
          </div>
          <Link to="/">
            <img src={logo} alt="logo" className="header__logo" />
          </Link>
          <HeaderRight moneyCount={moneyCount} />
        </nav>
      </div>
      <BurgerMenu isMenuOpen={isMenuOpen} onClick={handleBurgerMenu} />
    </header>
  );
};

export default Header;
