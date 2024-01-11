import React from "react";
import { RxCross1 } from "react-icons/rx";

const Exit = ({ onClick, position, top, right, color }) => {
  return (
    <RxCross1
      onClick={onClick}
      className="exit"
      style={{
        position: position,
        top: top,
        right: right,
        color: color,
      }}
    />
  );
};

export default Exit;
