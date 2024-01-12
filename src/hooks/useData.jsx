import { collection, doc, onSnapshot, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../services/firebase/firebase-config";

const useData = (collectionName, uid) => {
  const [data, setData] = useState([]);
  let collectionRef;

  if (uid) {
    collectionRef = doc(db, collectionName, uid);
  } else {
    collectionRef = collection(db, collectionName);
  }
  useEffect(() => {
    const getData = async () => {
      try {
        const querySnapshot = await getDocs(collectionRef);
        const filteredData = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setData(filteredData);
        localStorage.setItem(collectionName, JSON.stringify(filteredData));
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    const unsubscribe = onSnapshot(collectionRef, (querySnapshot) => {
      const filteredData = querySnapshot.docs.map((doc) => {
        let data = doc.data();
        if (typeof data.cartData === 'string') {
          data.cartData = JSON.parse(data.cartData);
        }
        return {
          ...data,
          id: doc.id,
        };
      });
      setData(filteredData);
      localStorage.setItem(collectionName, JSON.stringify(filteredData));
    });
  
    return () => unsubscribe();
  }, []);

  return { data };
};

export default useData;
