import React, { useEffect, useState } from "react";
import ProductCardTitle from "../../shared/productCard/ui/ProductCardTitle";
import ProductCardPrice from "../../shared/productCard/ui/ProductCardPrice";
import ProductCardImg from "../../shared/productCard/ui/ProductCardImg";
import ProductCardButton from "../../shared/productCard/ui/ProductCardButton";
import { useDispatch } from "react-redux";
import { handleShowMore, setSelectedItem } from "../../store/slices/productInfoSlice";

const ProductCard = ({ img, title, price, text, id }) => {
  const [soledOut, setSoledOut] = useState(false);
  const dispatch = useDispatch();

  const productInfoOpen = () => {
    dispatch(setSelectedItem(id));
    dispatch(handleShowMore());
  };

  useEffect(() => {
    if (text) {
      setSoledOut(text.toLowerCase() === "sold out");
    }
  }, [text]);

  return (
    <div className="product-card">
      <ProductCardImg img={img} alt="flowers" onClick={productInfoOpen} />
      <div className="product-card__info-wrapper">
        <div className="product-card__info">
          <ProductCardTitle title={title} />
          <ProductCardPrice price={price} />
        </div>
        <ProductCardButton text={text} status={soledOut} />
      </div>
    </div>
  );
};

export default ProductCard;
