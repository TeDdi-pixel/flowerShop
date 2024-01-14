import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../firebase/firebase-config";
import { updateDoc } from "firebase/firestore";

export const setUserCart = async (uid, cartData) => {
  if (!uid || !cartData || !(uid && cartData)) {
    return;
  }
  try {
    const docRef = doc(db, "userCarts", uid);
    const docSnap = await getDoc(docRef);

    for (let key in cartData) {
      if (cartData[key] === undefined) {
        cartData[key] = null;
      }
    }

    if (!docSnap.exists()) {
      await setDoc(docRef, { cartData: cartData });
    } else {
      await updateDoc(docRef, { cartData: cartData });
    }
  } catch (error) {
    const errorMessage = error.message;
    console.error("errorMessage:" + errorMessage);
  }
};
