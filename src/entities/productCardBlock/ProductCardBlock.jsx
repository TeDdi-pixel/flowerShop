import React from "react";
import ProductCard from "../../shared/productCard/ProductCard";
import { topRatedData } from "../../shared/productCard/config/topRatedData";

const ProductCardBlock = () => {
  return (
    <div className="top-rated__cards">
      {topRatedData.map((item, index) => {
        return (
          <ProductCard
            key={index}
            img={item.img}
            text={item.text}
            title={item.title}
            price={item.price}
          />
        );
      })}
    </div>
  );
};

export default ProductCardBlock;
