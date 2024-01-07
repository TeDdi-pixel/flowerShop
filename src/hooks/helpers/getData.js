import { collection, doc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "../../services/firebase-config";

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
      for (let i = 0; i < urls.length; i++) {
        const docRef = doc(collectionRef, docIds[i]);
        await updateDoc(docRef, {
          imageUrl: urls[i],
        });
      }
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
