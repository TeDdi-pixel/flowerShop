import React from "react";
import { RxCross1 } from "react-icons/rx";

const Exit = ({ onClick }) => {
  return <RxCross1 onClick={onClick} className="exit" style={{ color: "#665f5f" }}/>;
};

export default Exit;
