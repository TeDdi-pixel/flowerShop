import React from "react";
import { burgerLinks } from "./burgerMenu-config";
import BurgerLink from "../../shared/burgerLink/BurgerLink";
import Exit from "../../shared/exit/Exit";
import { useDispatch, useSelector } from "react-redux";
import { logOutUser, setUserIsSignedIn } from "../../store/slices/userSlice";
import { Link } from "react-router-dom";
import {
  setEmptyCart,
  setTotalPrice,
  updateCart,
} from "../../store/slices/cartSlice";
import { setBurgerMenuOpen } from "../../store/slices/burgerMenuSlice";

const BurgerMenu = () => {
  const userIsSignIn = useSelector((state) => state.user.userIsSignIn);
  const { burgerMenuOpened } = useSelector((state) => state.burgerMenu);
  const dispatch = useDispatch();

  const onLogOut = () => {
    dispatch(logOutUser());
    dispatch(setBurgerMenuOpen(false));
    dispatch(setTotalPrice(0));
    dispatch(setUserIsSignedIn(false));
    dispatch(setEmptyCart(true));
    dispatch(updateCart([]));
  };

  return (
    <div
      className={
        burgerMenuOpened ? "burger-menu burger-menu_open" : "burger-menu"
      }
    >
      <div className="burger-menu__wrapper">
        <Exit
          onClick={() => dispatch(setBurgerMenuOpen(false))}
          color={"#665f5f"}
        />
        <div className="burger-menu__links">
          {burgerLinks.map((link, index) => {
            return <BurgerLink key={index} path={link.path} name={link.name} />;
          })}
        </div>
        <div
          className={userIsSignIn ? "burger-menu_logOut" : "burger-menu_signIn"}
        >
          {userIsSignIn && (
            <Link to="/" onClick={onLogOut}>
              Log out
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
