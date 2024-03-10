import { getDocs } from "firebase/firestore";

export const getFilteredData = async (collectionRef) => {
  const querySnapshot = await getDocs(collectionRef);
  if (querySnapshot) {
    const newFilteredData = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));

    return newFilteredData;
  }
};
