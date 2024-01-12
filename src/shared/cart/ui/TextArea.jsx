import React from "react";

const TextArea = ({ placeholder, title }) => {
  return (
    <div className="cart__text-area">
      <h4 className="cart__text-area-title">{title}</h4>
      <textarea
        placeholder={placeholder}
        className="cart__text-area-text"
      ></textarea>
    </div>
  );
};

export default TextArea;
