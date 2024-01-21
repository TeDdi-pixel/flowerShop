import React, { useEffect, useState } from "react";
import ProductCardTitle from "../../shared/productCard/ui/ProductCardTitle";
import ProductCardPrice from "../../shared/productCard/ui/ProductCardPrice";
import ProductCardImg from "../../shared/productCard/ui/ProductCardImg";
import ProductCardButton from "../../shared/productCard/ui/ProductCardButton";
import { useSelector } from "react-redux";
import ProductCardMessage from "../../shared/productCard/ui/ProductCardMessage";

const ProductCard = ({
  img,
  title,
  price,
  text,
  productInfoOpen,
  handleAddToCart,
}) => {
  const [soledOut, setSoledOut] = useState(false);
  const [isAddedMessage, setIsAddedMessage] = useState(false);
  const [delay, setDelay] = useState(true);
  const cartData = useSelector((state) => state.cart.cartData);

  const addToCart = () => {
    if (text === "Add to cart" && delay) {
      setIsAddedMessage(true);
      handleAddToCart();
      setDelay(false);
      setTimeout(() => {
        setIsAddedMessage(false);
        setDelay(true);
      }, 2000);
    }
  };
  useEffect(() => {
    if (text) {
      setSoledOut(text.toLowerCase() === "sold out");
    }
  }, [text, cartData]);

  return (
    <div className="product-card">
      <ProductCardMessage
        isAddedMessage={isAddedMessage}
        width={"175px"}
        height={"50px"}
        top={"40%"}
      />
      <ProductCardImg img={img} alt="flowers" onClick={productInfoOpen} />
      <div className="product-card__info-wrapper">
        <div className="product-card__info">
          <ProductCardTitle title={title} />
          <ProductCardPrice price={price} />
        </div>
        <ProductCardButton
          text={text}
          status={soledOut}
          addToCart={addToCart}
        />
      </div>
    </div>
  );
};

export default ProductCard;
