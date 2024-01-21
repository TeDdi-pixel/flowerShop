import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const ProductCardMessage = ({ isAddedMessage, width, height, top }) => {
  return (
    <div
      className={`product-card__message ${
        isAddedMessage ? "product-card__message_open" : ""
      } `}
      style={{ width: width, height: height, top: top }}
    >
      <FaCheckCircle />
      Product added!
    </div>
  );
};

export default ProductCardMessage;
