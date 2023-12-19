import React from "react";

const MainBtn = ({ text, bgColor, fontColor, marginBottom }) => {
  return (
    <div
      style={{
        backgroundColor: bgColor,
        color: fontColor,
        marginBottom: marginBottom,
      }}
      className="button_main"
    >
      {text}
    </div>
  );
};

export default MainBtn;
