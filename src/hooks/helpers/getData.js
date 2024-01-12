import { collection, doc, getDocs, writeBatch } from "firebase/firestore";
import { db } from "../../services/firebase/firebase-config";

export const getData = async (collectionName, urls, setCollectionsData) => {
  const collectionRef = collection(db, collectionName);
  const cachedData = localStorage.getItem(collectionName);
  if (cachedData) {
    localStorage.clear()
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
      const newData = await getDocs(collectionRef);
      const newFilteredData = newData.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setCollectionsData(newFilteredData);
      localStorage.setItem(collectionName, JSON.stringify(newFilteredData));
    } catch (error) {
      console.log(error);
    }
  }
};
