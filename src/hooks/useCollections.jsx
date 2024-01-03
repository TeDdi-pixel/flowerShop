import { collection, doc, getDocs, updateDoc } from "firebase/firestore";
import { getDownloadURL, listAll, ref } from "firebase/storage";
import { useEffect, useState } from "react";
import { db, storage } from "../services/firebase-config";

const useCollections = (collectionName, folder) => {
  const [urls, setUrls] = useState([]);
  const [collectionsData, setCollectionsData] = useState([]);

  const collectionRef = collection(db, collectionName);

  useEffect(() => {
    const getData = async () => {
      const cachedData = localStorage.getItem(collectionName);
      if (cachedData) {
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
    if (urls.length > 0) {
      getData();
    }
  }, [urls]);

  useEffect(() => {
    listAll(ref(storage, `${folder}`))
      .then((res) =>
        Promise.all(res.items.map((item) => getDownloadURL(item)))
      )
      .then((urls) => {
        setUrls(urls);
      })
      .catch((error) => {
        console.error(`Error listing all items: ${error}`);
      });
  }, []);

  return { collectionsData };
};

export default useCollections;
