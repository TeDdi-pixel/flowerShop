import { doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../services/firebase/firebase-config";

const useCart = (collectionName, uid) => {
  const [data, setData] = useState(null);

  let docRef = doc(db, collectionName, uid.toString());

  useEffect(() => {
  const unsubscribe = onSnapshot(docRef, (docSnapshot) => {
    let data = docSnapshot.data();
    if (data && typeof data.cartData === "string") {
      data.cartData = JSON.parse(data.cartData);
    }
    if (data) {
      setData({
        ...data,
        id: docSnapshot.id,
      });
      localStorage.setItem(collectionName, JSON.stringify(data));
    }
  });

  return () => unsubscribe();
}, []);


  return { data };
};

export default useCart;
