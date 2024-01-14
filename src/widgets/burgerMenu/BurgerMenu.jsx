import React from "react";
import { burgerLinks } from "./burgerMenu-config";
import BurgerLink from "../../shared/burgerLink/BurgerLink";
import Exit from "../../shared/exit/Exit";
import { useDispatch, useSelector } from "react-redux";
import { logOutUser } from "../../store/slices/userSlice";
import { Link } from "react-router-dom";
import { setTotalPrice } from "../../store/slices/cartSlice";
import { signInWithGoogle } from "../../services/signInWithGoogle";

const BurgerMenu = ({ isMenuOpen, onClick }) => {
  const userIsSignIn = useSelector((state) => state.user.userIsSignIn);
  const userCart = useSelector((state) => state.cart.userCart);
  const cookiesEnabled = useSelector((state) => state.cookies.cookiesEnabled);
  const dispatch = useDispatch();

  const onLogOut = () => {
    dispatch(logOutUser());
    onClick();
    dispatch(setTotalPrice(0));
  };
  const onLogIn = () => {
    signInWithGoogle(dispatch, cookiesEnabled, userCart);
    onClick();
  };
  return (
    <div
      className={isMenuOpen ? "burger-menu burger-menu_open" : "burger-menu"}
    >
      <div className="burger-menu__wrapper">
        <Exit onClick={onClick} color={"#665f5f"} />
        <div className="burger-menu__links">
          {burgerLinks.map((link, index) => {
            return <BurgerLink key={index} path={link.path} name={link.name} />;
          })}
        </div>
        <div
          className={userIsSignIn ? "burger-menu_logOut" : "burger-menu_signIn"}
        >
          {userIsSignIn ? (
            <Link to="/" onClick={onLogOut}>
              LogOut
            </Link>
          ) : (
            !userIsSignIn && (
              <Link to="/" onClick={onLogIn}>
                SignIn
              </Link>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
