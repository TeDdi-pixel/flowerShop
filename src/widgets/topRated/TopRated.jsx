import React from "react";
import ProductCardBlock from "../../entities/productCardBlock/ProductCardBlock";
import ShowMoreBtn from "../../shared/mainBtn/MainBtn";
import MainBtn from "../../shared/mainBtn/MainBtn";

const TopRated = () => {
  return (
    <div className="top-rated">
      <h2 className="top-rated__title">Top Rated</h2>
      <ProductCardBlock />
      <MainBtn
        text={"Show more"}
        bgColor={"#665F5F"}
        fontColor={"white"}
        marginBottom={"90px"}
      />
    </div>
  );
};

export default TopRated;
