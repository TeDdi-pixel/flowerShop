import React from "react";

const DefaultInput = ({ text, icon, type }) => {
  return (
    <div className="default-input">
      <input type={type} placeholder={text} />
      <button>{icon}</button>
    </div>
  );
};

export default DefaultInput;
