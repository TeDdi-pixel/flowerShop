import React from "react";
import { burgerLinks } from "./burgerMenu-config";
import BurgerLink from "../../shared/burgerLink/BurgerLink";
import Exit from "../../shared/exit/Exit";
import { useDispatch, useSelector } from "react-redux";
import { logOutUser } from "../../store/slices/userSlice";
import { signInWithGoogle } from "../../services/signInWithGoogle";
import { Link } from "react-router-dom";

const BurgerMenu = ({ isMenuOpen, onClick }) => {
  const userIsSignIn = useSelector((state) => state.user.userIsSignIn);
  const cookiesEnabled = useSelector((state) => state.cookies.cookiesEnabled);
  const dispatch = useDispatch();

  const onLogOut = () => {
    dispatch(logOutUser());
    onClick();
  };
  const onLogIn = () => {
    signInWithGoogle(cookiesEnabled);
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
          {userIsSignIn ? (
            <Link to="/" className="burger-menu__logOut" onClick={onLogOut}>
              LogOut
            </Link>
          ) : (
            !userIsSignIn && (
              <Link to="/" className="burger-menu__signIn" onClick={onLogIn}>
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
