import { useEffect } from "react";
import useCollections from "../../hooks/useCollections";
import {
  handleShowMore,
  setSelectedItem,
} from "../../store/slices/productInfoSlice";
import { useDispatch, useSelector } from "react-redux";
import { useAddToCart } from "../../hooks/useAddToCart";
import { setUserCart } from "../../services/setters/setUserCart";
import ProductCard from "../../entities/productCard/ProductCard";
import { RootState, TypeProduct } from "../../store/types/types";

const ProductCardBlock = () => {
  const { collectionsData } = useCollections("products", "productsImg");
  const { cookiesEnabled } = useSelector((state: RootState) => state.cookies);
  const { uid, storageUserData } = useSelector(
    (state: RootState) => state.user
  );
  const { cartData } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();
  const { handleAddToCart, addedProducts } = useAddToCart();

  const productInfoOpen = (id: string) => {
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
      {collectionsData.map((card: TypeProduct) => (
        <ProductCard
          key={card.id}
          id={card.id}
          img={card.imageUrl}
          title={card.title}
          price={card.price}
          text={card.text}
          addedProducts={addedProducts}
          productInfoOpen={() => productInfoOpen(card.id)}
          handleAddToCart={() => handleAddToCart(card)}
          soledOut={card.text.toLowerCase() === "sold out"}
        />
      ))}
    </div>
  );
};

export default ProductCardBlock;
