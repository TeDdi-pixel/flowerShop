import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../firebase/firebase-config";
import { updateDoc } from "firebase/firestore";
import { saveToCookies } from "../../helpers/browserActions";

export const setUserCart = async (uid, cartData) => {
  if (!uid || !cartData || !(uid && cartData)) {
    return;
  }

  try {
    const docRef = doc(db, "userCarts", uid);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      await setDoc(docRef, { cartData: cartData });
      saveToCookies("cart", cartData);
    } else {
      await updateDoc(docRef, { cartData: cartData });
      saveToCookies("cart", cartData);
    }
  } catch (error) {
    const errorMessage = error.message;
    console.error("errorMessage:" + errorMessage);
  }
};
