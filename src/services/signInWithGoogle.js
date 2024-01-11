import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "./firebase-config";
import { setUserCart } from "./setUserCart";
import Cookies from "js-cookie";

const signInWithGoogle = async (cookiesEnabled) => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    const uid = auth.currentUser.uid;
    localStorage.setItem("user", JSON.stringify(result));
    console.log(result);
    await setUserCart(uid, {});
    if (cookiesEnabled) {
      Cookies.set("user", JSON.stringify(result), { expires: 7 });
    }
    location.reload()
  } catch (error) {
    const errorMessage = error.message;
    alert("errorMessage:" + errorMessage);
  }
};

export { signInWithGoogle };
