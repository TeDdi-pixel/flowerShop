import React, { useEffect, useState } from "react";
import logo from "../../assets/icons/logo.svg";
import HeaderRight from "../../entities/headerRight/HeaderRight";
import HeaderIconMenu from "../../shared/headerIconMenu/HeaderIconMenu.jsx";
import { Link } from "react-router-dom";
import BurgerMenu from "../burgerMenu/BurgerMenu.jsx";

const Header = () => {
  const [moneyCount, setMoneyCount] = useState(40.25);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const checkScroll = () => {
    setIsScrolled(window.scrollY >= 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScroll);
    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);

  const handleBurgerMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  return (
    <header className={isScrolled ? "header header_scrolled" : "header"}>
      <div className="header__container">
        <nav
          className={
            isScrolled ? "header__nav header__nav_scrolled" : "header__nav"
          }
        >
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
