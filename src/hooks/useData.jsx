import { collection, onSnapshot, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../services/firebase-config";

const useData = (collectionName) => {
  const [data, setData] = useState([]);
  const collectionRef = collection(db, collectionName);

  useEffect(() => {
    const getData = async () => {
      try {
        const querySnapshot = await getDocs(collectionRef); // Используем getDocs для начального запроса
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
      const filteredData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setData(filteredData);
      localStorage.setItem(collectionName, JSON.stringify(filteredData));
    });

    return () => unsubscribe();
  }, []);

  return { data };
};

export default useData;