import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "./firebase/firebase-config";

export const removeProductFromCart = async (uid, productId) => {
  try {
    const docRef = doc(db, "userCarts", uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const cartData = docSnap.data().cartData;
      const updatedCartData = cartData.filter(product => product.id !== productId);

      await updateDoc(docRef, { cartData: updatedCartData });
    }
  } catch (error) {
    console.error("Error removing product: ", error);
  }
};
