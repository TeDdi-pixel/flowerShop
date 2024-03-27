import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../store/slices/cartSlice";
import { saveToCookies } from "../helpers/storageUtils";
import { setUserCart } from "../services/setters/setUserCart";
import { RootState, TypeProduct } from "../store/types/types";
import { notify, error } from "../helpers/notify";

export const useAddToCart = () => {
  const { cookiesEnabled } = useSelector((state: RootState) => state.cookies);
  const { uid } = useSelector((state: RootState) => state.user);
  const { cartData } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  const handleAddToCart = async (product: TypeProduct) => {
    if (uid && cookiesEnabled) {
      saveToCookies("cart", [...cartData, product]);
      dispatch(addToCart(product));
      if (cartData) {
        try {
          await setUserCart(uid, [...cartData, product]);
          saveToCookies("cart", [...cartData, product]);
          notify("Product successfully added!");
        } catch (error: any) {
          error(error.message);
        }
      }
    } else if (!cookiesEnabled) {
      error("Cookies: No enabled cookies found");
    } else if (!uid) {
      error("Cookies: No signed in user found");
    }
  };

  return { handleAddToCart };
};
