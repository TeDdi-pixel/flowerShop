import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../firebase/firebase-config";
import { updateDoc } from "firebase/firestore";

export const setUserCart = async (uid, cartData) => {
  console.log('setUserCart called with uid:', uid, 'and cartData:', cartData); // Добавлено логирование

  if (!uid || !cartData || !(uid && cartData)) {
    console.log('setUserCart early return due to missing uid or cartData'); // Добавлено логирование
    return;
  }

  try {
    const docRef = doc(db, "userCarts", uid);
    const docSnap = await getDoc(docRef);

    for (let key in cartData) {
      if (cartData[key] === undefined) {
        console.error('Undefined value found in cartData for key:', key); // Добавлено логирование
        cartData[key] = null;
      }
    }

    console.log('setUserCart updating Firestore with cartData:', cartData); // Добавлено логирование

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

