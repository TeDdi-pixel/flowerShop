import React, { useEffect, useState } from "react";
import logo from "../../assets/icons/logo.svg";
import HeaderRight from "../../entities/headerRight/HeaderRight";
import HeaderIconMenu from "../../shared/headerIconMenu/HeaderIconMenu.jsx";
import { Link } from "react-router-dom";
import BurgerMenu from "../burgerMenu/BurgerMenu.jsx";
import { useDispatch, useSelector } from "react-redux";
import {
  calculateTotalPrice,
  setTotalPrice,
} from "../../store/slices/cartSlice.js";

const Header = () => {
  // const moneyCount = useSelector((state) => state.cart.moneyCount);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const userIsSignIn = useSelector((state) => state.user.userIsSignIn);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const cartData = useSelector((state) => state.cart.cartData);
  const dispatch = useDispatch();

  const handleBurgerMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  useEffect(() => {
    const newTotalPrice = calculateTotalPrice(cartData);
    dispatch(setTotalPrice(newTotalPrice));
  }, [cartData]);
  return (
    <header className="header header_scrolled">
      <div className="header__container">
        <nav className="header__nav header__nav_scrolled">
          <div
            className={userIsSignIn ? " header__left-signIn" : " header__left"}
          >
            <HeaderIconMenu onClick={handleBurgerMenu} />
          </div>
          <Link to="/">
            <img src={logo} alt="logo" className="header__logo" />
          </Link>
          <HeaderRight moneyCount={totalPrice} />
        </nav>
      </div>
      <BurgerMenu isMenuOpen={isMenuOpen} onClick={handleBurgerMenu} />
    </header>
  );
};

export default Header;
