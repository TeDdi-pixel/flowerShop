import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../store/slices/cartSlice";
import { saveToCookies } from "../helpers/browserActions";
import { setError, setErrorMessage } from "../store/slices/cookiesSlice";
import { useState } from "react";
import { setUserCart } from "../services/setters/setUserCart";

export const useAddToCart = () => {
  const cookiesEnabled = useSelector((state) => state.cookies.cookiesEnabled);
  const uid = useSelector((state) => state.user.userData);
  const storageUserData = useSelector((state) => state.user.storageUserData);
  const cartData = useSelector((state) => state.cart.cartData);
  const dispatch = useDispatch();
  const [addedProducts, setAddedProducts] = useState({});

  const handleAddToCart = async (product) => {
    if (!addedProducts[product.id]) {
      if (uid && cookiesEnabled && storageUserData?.user?.uid) {
        dispatch(addToCart(product));
        if (cartData) {
          setUserCart(uid, cartData);
          saveToCookies("cart", cartData);
          setAddedProducts({ ...addedProducts, [product.id]: true });
          setTimeout(() => {
            setAddedProducts({ ...addedProducts, [product.id]: false });
          }, 2000);
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
