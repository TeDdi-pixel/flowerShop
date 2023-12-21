import React from "react";
import ProductCardTitle from "./ui/ProductCardTitle";
import ProductCardPrice from "./ui/ProductCardPrice";
import ProductCardImg from "./ui/ProductCardImg";
import ProductCardButton from "./ui/ProductCardButton";

const ProductCard = ({img,title,price,text}) => {
  return (
    <div className="product-card">
      <ProductCardImg img={img} alt="flowers" />
      <div className="product-card__info-wrapper">
        <div className="product-card__info">
          <ProductCardTitle
            title={title}
          />
          <ProductCardPrice price={price} />
        </div>
        <ProductCardButton text={text}/>
      </div>
    </div>
  );
};

export default ProductCard;
