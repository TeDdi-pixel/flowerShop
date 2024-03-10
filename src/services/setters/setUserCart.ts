import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/firebase-config";
import { saveToCookies } from "../../helpers/storageUtils";
import { TypeProduct } from "../../store/types/types";

export const setUserCart = async (
  uid: string | null,
  cartData: TypeProduct[]
) => {
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
    if (error instanceof Error) {
      const errorMessage = error.message;
      console.error("errorMessage:" + errorMessage);
    }
  }
};
