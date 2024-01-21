import React, { useEffect } from "react";
import ProductCard from "../../entities/productCard/ProductCard";
import useCollections from "../../hooks/useCollections";
import { setUserCart } from "../../services/setters/setUserCart";
import {
  handleShowMore,
  setSelectedItem,
} from "../../store/slices/productInfoSlice";
import { useDispatch, useSelector } from "react-redux";
import { useAddToCart } from "../../hooks/useAddToCart";

const ProductCardBlock = () => {
  const { collectionsData } = useCollections("products", "productsImg");
  const cookiesEnabled = useSelector((state) => state.cookies.cookiesEnabled);
  const uid = useSelector((state) => state.user.userData);
  const storageUserData = useSelector((state) => state.user.storageUserData);
  const cartData = useSelector((state) => state.cart.cartData);
  const dispatch = useDispatch();
  const handleAddToCart = useAddToCart();

  const productInfoOpen = (id) => {
    dispatch(setSelectedItem(id));
    dispatch(handleShowMore());
  };

  useEffect(() => {
    if (storageUserData && cartData.length > 0 && uid && cookiesEnabled) {
      setUserCart(uid, cartData);
    }
  }, [cartData, uid]);

  return (
    <div className="top-rated__cards">
      {collectionsData.map((card) => (
        <ProductCard
          key={card.id}
          id={card.id}
          img={card.imageUrl}
          title={card.title}
          price={card.price}
          text={card.text}
          productInfoOpen={() => productInfoOpen(card.id)}
          handleAddToCart={() => handleAddToCart(card)}
          soledOut={card.text.toLowerCase() === "sold out"}
        />
      ))}
    </div>
  );
};

export default ProductCardBlock;
