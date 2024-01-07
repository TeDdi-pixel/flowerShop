import React, { useState } from "react";
import SizeTitle from "../../shared/productSlide/sizeUi/SizeTitle";
import Size from "../../shared/productSlide/sizeUi/Size";
import useData from "../../hooks/useData";

const ProductSlideSize = () => {
  const { data } = useData("products");
  const product = data.find((item) => item);
  const [selectedSize, setSelectedSize] = useState(null);
  const handleSelected = (size) => {
    setSelectedSize(size);
  };
  return (
    <div className="product-info__size-block">
      <SizeTitle text={"Size"} />
      <div className="product-info__size-wrapper">
        {product &&
          product.size.map((size, index) => (
            <Size
              key={index}
              size={size}
              isSelected={size === selectedSize}
              onClick={() => handleSelected(size)}
            />
          ))}
      </div>
    </div>
  );
};

export default ProductSlideSize;
