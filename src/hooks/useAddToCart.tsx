import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../store/slices/cartSlice";
import { saveToCookies } from "../helpers/storageUtils";
import { setError, setErrorMessage } from "../store/slices/cookiesSlice";
import { useState } from "react";
import { setUserCart } from "../services/setters/setUserCart";
import { RootState, TypeProduct } from "../store/types/types";
import { TypeAddedProds } from "./types/types";

export const useAddToCart = () => {
  const { cookiesEnabled } = useSelector((state: RootState) => state.cookies);
  const { storageUserData, uid } = useSelector(
    (state: RootState) => state.user
  );
  const cartData = useSelector((state: RootState) => state.cart.cartData);
  const dispatch = useDispatch();
  const [addedProducts, setAddedProducts] = useState<TypeAddedProds>({});

  const handleAddToCart = async (product: TypeProduct) => {
    if (!addedProducts[product.id]) {
      if (uid && cookiesEnabled && storageUserData?.user?.uid) {
        saveToCookies("cart", [...cartData, product]);
        dispatch(addToCart(product));
        if (cartData) {
          try {
            await setUserCart(uid, [...cartData, product]);
            saveToCookies("cart", [...cartData, product]);
            setAddedProducts({ ...addedProducts, [product.id]: true });
            setTimeout(() => {
              setAddedProducts({ ...addedProducts, [product.id]: false });
            }, 2000);
          } catch (error) {
            console.error(error);
          }
        }
      } else if (!cookiesEnabled) {
        dispatch(setError(true));
        dispatch(setErrorMessage("Cookies: No enabled cookies found"));
      } else if (!uid || !storageUserData?.user?.uid) {
        dispatch(setError(true));
        dispatch(setErrorMessage("Cookies: No signed in user found"));
      }
    }
  };

  return { handleAddToCart, addedProducts };
};
