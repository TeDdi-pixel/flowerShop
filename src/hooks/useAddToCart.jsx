import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../store/slices/cartSlice";
import { setUserCart } from "../services/setters/setUserCart";
import { saveToCookies } from "../helpers/browserActions";

export const useAddToCart = () => {
  const cookiesEnabled = useSelector((state) => state.cookies.cookiesEnabled);
  const uid = useSelector((state) => state.user.userData);
  const storageUserData = useSelector((state) => state.user.storageUserData);
  const cartData = useSelector((state) => state.cart.cartData);
  const dispatch = useDispatch();

  const handleAddToCart = async (product) => {
    if (product.text === "Add to cart") {
      if (uid && cookiesEnabled && storageUserData?.user?.uid) {
        dispatch(addToCart(product));
        if (cartData) {
          await setUserCart(uid, cartData);
          saveToCookies("cart", cartData);
        }
      } else if (!uid || !storageUserData?.user?.uid) {
        alert("To add products into the cart, you need to login firstly");
      } else if (!cookiesEnabled) {
        alert("You need to allow cookies to add products");
      }
    }
  };

  return handleAddToCart;
};
