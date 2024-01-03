import React from "react";

const Input = ({ type, text }) => {
  return (
    <input
      className="write-to-us__input write-to-us__text"
      type={type}
      placeholder={text}
    />
  );
};

export default Input;
