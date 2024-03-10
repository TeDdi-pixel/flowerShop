import { doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../services/firebase/firebase-config";
import { calculateTotalPrice } from "../helpers/calculateTotalPrice";
import { getFromCookies, saveToCookies } from "../helpers/storageUtils";
import { useSelector } from "react-redux";
import { RootState } from "../store/types/types";

const useCart = () => {
  const { cookiesEnabled } = useSelector((state: RootState) => state.cookies);
  const [cartData, setCartData] = useState(getFromCookies("cart") || null);
  const { uid } = useSelector((state: RootState) => state.user);
  useEffect(() => {
    if (!uid) {
      return;
    }
    let docRef = doc(db, "userCarts", uid.toString());

    const unsubscribe = onSnapshot(docRef, (docSnapshot) => {
      const newData = docSnapshot.exists() ? docSnapshot.data().cartData : null;

      if (JSON.stringify(newData) !== JSON.stringify(cartData)) {
        setCartData(newData);

        if (newData && cookiesEnabled) {
          try {
            saveToCookies("totalPrice", calculateTotalPrice(newData));
            saveToCookies("cart", newData);
          } catch (error) {
            console.error("Failed to set item in localStorage:", error);
          }
        }
      }
    });
    return () => unsubscribe();
  }, [uid, cookiesEnabled]);

  return { cartData };
};

export default useCart;
