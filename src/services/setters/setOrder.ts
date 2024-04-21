import { collection, doc, setDoc } from "firebase/firestore";
import { notify } from "../../helpers/notify";
import { db } from "../firebase/firebase-config";
import { TypeOrder } from "../../entities/cart/types/types";

export const setOrder = async (order: TypeOrder) => {
  try {
    const docRef = doc(collection(db, "orders"));
    await setDoc(docRef, order);
    notify("Your order has been successfully placed");
  } catch (error) {
    console.log(error);
  }
};
