import HeaderRight from "../../entities/headerRight/HeaderRight.jsx";
import HeaderIconMenu from "../../shared/header/HeaderIconMenu.jsx";
import { Link } from "react-router-dom";
import BurgerMenu from "../../entities/burgerMenu/BurgerMenu.js";
import { useSelector } from "react-redux";
import { RootState } from "../../store/types/types.js";
import LogoIcon from "../../shared/icons/header/LogoIcon";

const Header = () => {
  const { userIsSignIn } = useSelector((state: RootState) => state.user);

  return (
    <header className="header header_scrolled">
      <div className="header__container">
        <nav className="header__nav header__nav_scrolled">
          <div
            className={userIsSignIn ? " header__left-signIn" : " header__left"}
          >
            <HeaderIconMenu />
          </div>
          <Link to="/">
            <LogoIcon className="header__logo" />
          </Link>
          <HeaderRight />
        </nav>
      </div>
      <BurgerMenu />
    </header>
  );
};

export default Header;
