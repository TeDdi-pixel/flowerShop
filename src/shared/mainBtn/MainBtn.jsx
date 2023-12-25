import React from "react";
import { Link } from "react-router-dom";

const MainBtn = ({ text, bgColor, fontColor, marginBottom, link }) => {
  return (
    <Link
      to={link}
      style={{
        backgroundColor: bgColor,
        color: fontColor,
        marginBottom: marginBottom,
      }}
      className="button_main"
    >
      {text}
    </Link>
  );
};

export default MainBtn;
