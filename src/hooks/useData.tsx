import { collection, doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { getFilteredData } from "../helpers/hooks/getFilteredData";
import { db } from "../services/firebase/firebase-config";

const useData = (
  saveToStorage: boolean,
  collectionName: string,
  uid: string
) => {
  const [data, setData] = useState([]);
  let collectionRef;

  if (uid) {
    collectionRef = doc(db, collectionName, uid);
  } else {
    collectionRef = collection(db, collectionName);
  }

  const getData = async () => {
    try {
      const filteredData = await getFilteredData(collectionRef);
      setData(filteredData);
      if (saveToStorage)
        localStorage.setItem(collectionName, JSON.stringify(filteredData));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    const unsubscribe = onSnapshot(collectionRef, (querySnapshot) => {
      const filteredData = querySnapshot.docs.map((doc) => {
        let data = doc.data();
        if (typeof data.cartData === "string") {
          data.cartData = JSON.parse(data.cartData);
        }
        return {
          ...data,
          id: doc.id,
        };
      });
      setData(filteredData);
      if (saveToStorage)
        localStorage.setItem(collectionName, JSON.stringify(filteredData));
    });

    return () => unsubscribe();
  }, []);

  return { data };
};

export default useData;
