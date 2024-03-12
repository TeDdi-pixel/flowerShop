import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "../firebase/firebase-config";
import { TypeProduct } from "../../store/types/types";
import { notify } from "../../helpers/notify";

export const setCatalog = async (
  collectionName: string,
  product: TypeProduct
) => {
  try {
    const docRef = doc(collection(db, collectionName));
    await setDoc(docRef, product);
    notify("Image successfully shared!");
  } catch (error) {
    console.log(error);
  }
};
