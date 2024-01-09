import React from "react";
import SizeTitle from "../../shared/productSlide/sizeUi/SizeTitle";
import Size from "../../shared/productSlide/sizeUi/Size";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedSize } from "../../store/slices/productInfoSlice";

const Sizes = ({ sizes }) => {
  const selectedSize = useSelector((state) => state.productInfo.selectedSize);
  const dispatch = useDispatch();

  return (
    <div className="product-info__size-block">
      <SizeTitle text={"Size"} />
      <div
        className={`product-info__size-wrapper " ${
          sizes && sizes.length === 4
            ? "product-info__size-wrapper_flex-start"
            : ""
        }`}
      >
        {sizes &&
          sizes.map((size, index) => (
            <Size
              key={index}
              size={size}
              isSelected={size === selectedSize}
              onClick={() => dispatch(setSelectedSize(size))}
            />
          ))}
      </div>
    </div>
  );
};

export default Sizes;
