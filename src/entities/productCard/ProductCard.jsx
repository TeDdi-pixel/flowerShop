import React, { useEffect, useState } from "react";
import ProductCardTitle from "../../shared/productCard/ui/ProductCardTitle";
import ProductCardPrice from "../../shared/productCard/ui/ProductCardPrice";
import ProductCardImg from "../../shared/productCard/ui/ProductCardImg";
import ProductCardButton from "../../shared/productCard/ui/ProductCardButton";
import { useSelector } from "react-redux";
import ProductCardMessage from "../../shared/productCard/ui/ProductCardMessage";

const ProductCard = ({
  img,
  id,
  title,
  price,
  text,
  productInfoOpen,
  handleAddToCart,
  addedProducts,
}) => {
  const [soledOut, setSoledOut] = useState(false);
  const cartData = useSelector((state) => state.cart.cartData);
  const cookiesError = useSelector((state) => state.cookies.cookiesError);
  
  useEffect(() => {
    if (text) {
      setSoledOut(text.toLowerCase() === "sold out");
    }
  }, [text, cartData]);

  return (
    <div className="product-card">
      {!cookiesError && addedProducts[id] ? (
      <ProductCardMessage
        isAddedMessage={addedProducts[id]}
        width={"175px"}
        height={"50px"}
        top={"40%"}
      />
    ) : null}
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
