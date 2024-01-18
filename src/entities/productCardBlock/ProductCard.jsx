import React, { useEffect, useState } from "react";
import ProductCardTitle from "../../shared/productCard/ui/ProductCardTitle";
import ProductCardPrice from "../../shared/productCard/ui/ProductCardPrice";
import ProductCardImg from "../../shared/productCard/ui/ProductCardImg";
import ProductCardButton from "../../shared/productCard/ui/ProductCardButton";
import { useSelector } from "react-redux";

const ProductCard = ({
  img,
  title,
  price,
  text,
  productInfoOpen,
  handleAddToCart,
}) => {
  const [soledOut, setSoledOut] = useState(false);
  const cartData = useSelector((state) => state.cart.cartData);

  useEffect(() => {
    if (text) {
      setSoledOut(text.toLowerCase() === "sold out");
    }
  }, [text, cartData]);

  return (
    <div className="product-card">
      <ProductCardImg img={img} alt="flowers" onClick={productInfoOpen} />
      <div className="product-card__info-wrapper">
        <div className="product-card__info">
          <ProductCardTitle title={title} />
          <ProductCardPrice price={price} />
        </div>
        <ProductCardButton
          text={text}
          status={soledOut}
          addToCart={handleAddToCart}
        />
      </div>
    </div>
  );
};

export default ProductCard;
