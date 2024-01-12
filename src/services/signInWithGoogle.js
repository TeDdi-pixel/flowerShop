import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "./firebase/firebase-config";
import { setUserCart } from "./setters/setUserCart";
import { setUserLocalStorage } from "./setters/setUserLocalStorage";
import { setUserCookies } from "./setters/setUserCookies";

const signInWithGoogle = async (cookiesEnabled) => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    const uid = auth.currentUser.uid;
    setUserLocalStorage(result);
    await setUserCart(uid, {});
    await setUserCookies(cookiesEnabled, uid);
    location.reload();
  } catch (error) {
    const errorMessage = error.message;
    alert("errorMessage:" + errorMessage);
  }
};

export { signInWithGoogle };
