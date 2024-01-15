import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "./firebase/firebase-config";
import { setUserCart } from "./setters/setUserCart";
import { initializeCart } from "../store/slices/cartSlice";
import Cookies from "js-cookie";

export const signInWithGoogle = async (dispatch, cookiesEnabled, cartData) => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    const uid = auth.currentUser.uid;
    console.log(result);
    if (result !== undefined) {
      localStorage.setItem("user", JSON.stringify(result));
    }
    console.log(cartData);
    if (cartData && Array.isArray(cartData)) {
      await setUserCart(uid, cartData);
      dispatch(initializeCart({ payload: cartData }));
    }
    if (cookiesEnabled && uid) {
      Cookies.set("user", JSON.stringify(uid), { expires: 7 });
    } else if (cookiesEnabled && cartData) {
      Cookies.set("user", JSON.stringify(uid), { expires: 7 });
    } else {
      console.warn("Unable to set cookies due to missing or invalid data");
    }

    location.reload();
  } catch (error) {
    const errorMessage = error.message;
    console.error("errorMessage:" + errorMessage);
  }
};
