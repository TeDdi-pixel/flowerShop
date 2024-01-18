import { doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../services/firebase/firebase-config";
import Cookies from "js-cookie";
import { calculateTotalPrice } from "../helpers/calculateTotalPrice";
import { saveToCookies } from "../helpers/browserActions";

const useCart = (collectionName, uid, cookiesEnabled) => {
  const [cartData, setCartData] = useState(
    JSON.parse(Cookies.get("cart") || null)
  );

  useEffect(() => {
    if (!collectionName || !uid) {
      console.error("Invalid collectionName or uid");
      return;
    }
    let docRef = doc(db, collectionName, uid.toString());

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
  }, [collectionName, uid, cookiesEnabled]);

  return { cartData };
};

export default useCart;
