import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../services/firebase-config";

const useData = (collectionName) => {
    const [data, setData] = useState([]);
    const collectionRef = collection(db, collectionName);
  
    useEffect(() => {
      const getData = async () => {
        try {
          const querySnapshot = await getDocs(collectionRef);
          const filteredData = querySnapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));
          setData(filteredData);
        } catch (error) {
          console.log(error);
        }
      };
      getData();
    }, []);
  
    return { data };
  };
  

export default useData;
