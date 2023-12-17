import React from "react";
import logo from "../assets/icons/logo.svg";
// import HeaderLeft from "../shared/HeaderIcon/HeaderIcon";
import HeaderRight from "../entities/headerRight/HeaderRight";
import HeaderIcon from "../shared/HeaderIcon/HeaderIcon";
import { CgMenuLeft } from "react-icons/cg";

const Header = () => {
  let money = 0;
  return (
    <header className="header">
      <div className="header__container">
        <nav className="header__nav">
          <HeaderIcon
            icon={<CgMenuLeft style={{ fontSize: "20px", color: "#665F5F" }} />}
          />
          <img src={logo} alt="logo" className="header__logo" />
          <HeaderRight money={money} />
        </nav>
      </div>
    </header>
  );
};

export default Header;
