import React from "react";

const Size = ({ size, isSelected, onClick }) => {
  return (
    <div
      className={
        isSelected
          ? "product-info__size product-info__size_selected"
          : "product-info__size"
      }
      onClick={onClick}
    >
      <div
        className={
          isSelected
            ? "product-info__size-text product-info__size-text_selected"
            : "product-info__size-text"
        }
      >
        {size}
      </div>
      <span></span>
    </div>
  );
};

export default Size;
