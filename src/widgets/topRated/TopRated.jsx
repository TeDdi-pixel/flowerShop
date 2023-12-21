import React from "react";
import ProductCardBlock from "../../entities/productCardBlock/ProductCardBlock";
import ShowMoreBtn from "../../shared/mainBtn/MainBtn";
import MainBtn from "../../shared/mainBtn/MainBtn";
import MainTitle from "../../shared/mainTitle/MainTitle";

const TopRated = () => {
  return (
    <div className="top-rated">
      <MainTitle title={"Top rated"} />
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
