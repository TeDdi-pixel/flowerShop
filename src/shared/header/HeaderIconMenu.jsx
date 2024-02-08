import React from "react";
import { CgMenuLeft } from "react-icons/cg";

const HeaderIconMenu = ({ onClick }) => {
  return (
    <div className="header__icon-menu" onClick={onClick}>
      <CgMenuLeft style={{ color: "#665F5F" }} />
    </div>
  );
};

export default HeaderIconMenu;
