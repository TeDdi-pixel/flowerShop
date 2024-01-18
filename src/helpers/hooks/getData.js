import { collection, doc, getDocs, writeBatch } from "firebase/firestore";
import { db } from "../../services/firebase/firebase-config";
import { getFilteredData } from "./getFilteredData";

export const getData = async (collectionName, urls, setCollectionsData) => {
  const collectionRef = collection(db, collectionName);
  const cachedData = localStorage.getItem(collectionName);
  if (cachedData) {
    setCollectionsData(JSON.parse(cachedData));
  } else {
    try {
      const data = await getDocs(collectionRef);
      const docIds = data.docs.map((doc) => doc.id);
      const batch = writeBatch(db);
      for (let i = 0; i < urls.length; i++) {
        const docRef = doc(collectionRef, docIds[i]);
        batch.update(docRef, {
          imageUrl: urls[i],
        });
      }
      await batch.commit();
      const filteredData = await getFilteredData(collectionRef);
      setCollectionsData(filteredData);
      localStorage.setItem(collectionName, JSON.stringify(filteredData));
    } catch (error) {
      console.log(error);
    }
  }
};