import React from "react";
import { GoTrash } from "react-icons/go";

const TrashCan = ({ onClick }) => {
  return <GoTrash className="cart__product-trash-can" onClick={onClick} />;
};

export default TrashCan;
