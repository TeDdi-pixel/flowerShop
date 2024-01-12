import { doc, onSnapshot, getDoc, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../services/firebase/firebase-config";
const useData = (collectionName, uid) => {
    const [data, setData] = useState(null);
    let collectionRef;
  
    if (uid) {
      collectionRef = doc(db, collectionName, uid);
    } else {
      collectionRef = collection(db, collectionName);
    }
  
    useEffect(() => {
      const getData = async () => {
        try {
          const docSnapshot = await getDoc(collectionRef);
          if (docSnapshot.exists()) {
            const docData = docSnapshot.data();
            setData(docData.cartData); // Здесь мы устанавливаем data в cartData
            localStorage.setItem(collectionName, JSON.stringify(docData));
          } else {
            console.log("No such document!");
          }
        } catch (error) {
          console.log(error);
        }
      };
      getData();
    }, []);
  
    useEffect(() => {
      const unsubscribe = onSnapshot(collectionRef, (docSnapshot) => {
        if (docSnapshot.exists()) {
          const docData = docSnapshot.data();
          setData(docData.cartData); // Здесь мы устанавливаем data в cartData
          localStorage.setItem(collectionName, JSON.stringify(docData));
        } else {
          console.log("No such document!");
        }
      });
  
      return () => unsubscribe();
    }, []);
  
    return { data };
  };
