import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "./firebase-config";
import { setUserCart } from "./setUserCart";
import Cookies from "js-cookie";

const signInWithGoogle = async (cookiesEnabled) => {
  const provider = new GoogleAuthProvider();
  const uid = auth.currentUser.uid;
  try {
    const result = await signInWithPopup(auth, provider);
    localStorage.setItem("user", JSON.stringify(result));
    await setUserCart(uid, { name: "name" });
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
