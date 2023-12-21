import React, { useState } from "react";
import { LuSearch } from "react-icons/lu";

const HeaderIconSearch = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const showMenu = () => {
    setIsMenuOpened((prev) => !prev);
  };
  return (
    <div
      className={
        isMenuOpened ? "header__icon-search_opened" : "header__icon-search"
      }
      onClick={showMenu}
    >
      <LuSearch style={{ color: "#665F5F", fontSize: "17px" }} />
    </div>
  );
};

export default HeaderIconSearch;
