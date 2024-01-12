import React, { useEffect, useState } from "react";
import ProductCardTitle from "../../shared/productCard/ui/ProductCardTitle";
import ProductCardPrice from "../../shared/productCard/ui/ProductCardPrice";
import ProductCardImg from "../../shared/productCard/ui/ProductCardImg";
import ProductCardButton from "../../shared/productCard/ui/ProductCardButton";
import { useDispatch, useSelector } from "react-redux";
import {
  handleShowMore,
  setSelectedItem,
} from "../../store/slices/productInfoSlice";
import { addToCart } from "../../store/slices/cartSlice";
import { setUserCart } from "../../services/setters/setUserCart";

const ProductCard = ({ img, title, price, text, id }) => {
  const [soledOut, setSoledOut] = useState(false);
  const cookiesEnabled = useSelector((state) => state.cookies.cookiesEnabled);
  const uid = useSelector((state) => state.user.userData);
  const userLocalStorageData = useSelector(
    (state) => state.user.userLocalStorageData
  );
  const cartData = useSelector((state) => state.cart.cartData);
  const dispatch = useDispatch();

  const productInfoOpen = () => {
    dispatch(setSelectedItem(id));
    dispatch(handleShowMore());
  };

  const handleAddToCart = async () => {
    if (Object.keys(userLocalStorageData).length > 0 && cookiesEnabled && uid) {
      dispatch(addToCart({ img, title, price, text, id }));
      if (cartData) {
        await setUserCart(uid, cartData);
      }
    } else {
      alert("To add products into the cart, you need to login firstly");
    }
  };

  useEffect(() => {
    if (Object.keys(userLocalStorageData).length > 0 && cartData && uid) {
      setUserCart(uid, cartData);
    }
  }, [cartData, uid]);

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
