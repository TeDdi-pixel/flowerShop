import React from "react";

const SizeTitle = ({ text, fontSize }) => {
  return (
    <h3 className="product-info__size-title" style={{ fontSize: fontSize }}>
      {text}
    </h3>
  );
};

export default SizeTitle;
