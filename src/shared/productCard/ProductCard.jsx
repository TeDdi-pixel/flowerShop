import React from "react";
import flowers1 from "../../assets/img/flowers1.png";
import ProductCardTitle from "./ui/ProductCardTitle";
import ProductCardPrice from "./ui/ProductCardPrice";
import ProductCardImg from "./ui/ProductCardImg";
import ProductCardButton from "./ui/ProductCardButton";

const ProductCard = () => {
  return (
    <div className="product-card">
      <ProductCardImg img={flowers1} alt="flowers" />
      <div className="product-card__info-wrapper">
        <div className="product-card__info">
          <ProductCardTitle
            title={"Cristal (pink carnations with mix flowers)"}
          />
          <ProductCardPrice price={"$125.00"} />
        </div>
        <ProductCardButton text={'Add to cart'}/>
      </div>
    </div>
  );
};

export default ProductCard;
