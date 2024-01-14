import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "./firebase/firebase-config";
import { setUserCart } from "./setters/setUserCart";
import { setUserCookies } from "./setters/setUserCookies";
import { initializeCart } from "../store/slices/cartSlice";

export const signInWithGoogle = async (dispatch, cookiesEnabled, cartData) => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    const uid = auth.currentUser.uid;
    if (result !== undefined) {
      localStorage.setItem("user", JSON.stringify(result));
    }
    if (Array.isArray(cartData) ) {
      await setUserCart(uid, cartData);
    }
    await setUserCookies(cookiesEnabled, uid);
    dispatch(initializeCart(cartData));

    location.reload();
  } catch (error) {
    const errorMessage = error.message;
    console.error("errorMessage:" + errorMessage);
  }
};
