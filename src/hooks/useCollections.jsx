import { getDownloadURL, listAll, ref } from "firebase/storage";
import { useEffect, useState } from "react";
import { storage, db } from "../services/firebase-config";
import { collection, doc, getDocs, updateDoc } from "firebase/firestore";

const useCollections = (collectionName, folder) => {
  const [urls, setUrls] = useState([]);
  const [collectionsData, setCollectionsData] = useState([]);

  const collectionRef = collection(db, collectionName);
  const getCollectionList = async () => {
    const cachedData = localStorage.getItem(collectionName);
    localStorage.clear();
    if (cachedData) {
      setCollectionsData(JSON.parse(cachedData));
      return;
    }

    try {
      const data = await getDocs(collectionRef);
      const docIds = data.docs.map((doc) => doc.id);
      for (let i = 0; i < urls.length; i++) {
        const docRef = doc(collectionRef, docIds[i]);

        updateDoc(docRef, {
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
  };

  useEffect(() => {
    getCollectionList();
  }, [urls]);

  useEffect(() => {
    listAll(ref(storage, `${folder}`))
      .then((res) => {
        return Promise.all(res.items.map((item) => getDownloadURL(item)));
      })
      .then((urls) => {
        setUrls(urls);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return { collectionsData };
};


export default useCollections;
