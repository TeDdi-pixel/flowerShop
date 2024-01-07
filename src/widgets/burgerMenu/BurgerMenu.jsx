import React from "react";
import { burgerLinks } from "./burgerMenu-config";
import BurgerLink from "../../shared/burgerLink/BurgerLink";
import Exit from "../../shared/exit/Exit";

const BurgerMenu = ({ isMenuOpen, onClick }) => {
  return (
    <div
      className={isMenuOpen ? "burger-menu burger-menu_open" : "burger-menu"}
    >
      <div className="burger-menu__wrapper">
        <Exit onClick={onClick}/>
        {burgerLinks.map((link, index) => {
          return <BurgerLink key={index} path={link.path} name={link.name} />;
        })}
      </div>
    </div>
  );
};

export default BurgerMenu;
