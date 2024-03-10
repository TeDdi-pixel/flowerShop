import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "./firebase/firebase-config";
import { TypeProduct } from "../store/types/types";

export const removeProductFromCart = async (
  uid: string | null,
  productId: string
) => {
  try {
    if (!uid) return;
    const docRef = doc(db, "userCarts", uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const cartData = docSnap.data().cartData;
      const updatedCartData = cartData.filter(
        (product: TypeProduct) => product.id !== productId
      );

      await updateDoc(docRef, { cartData: updatedCartData });
    }
  } catch (error) {
    console.error("Error removing product: ", error);
  }
};
