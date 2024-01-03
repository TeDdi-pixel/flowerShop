import { storage } from "../../services/firebase-config";
import { getDownloadURL, listAll, ref } from "firebase/storage";

export const getUrls = async (folder, setUrls) => {
  listAll(ref(storage, `${folder}`))
    .then((res) => Promise.all(res.items.map((item) => getDownloadURL(item))))
    .then((urls) => {
      setUrls(urls);
    })
    .catch((error) => {
      console.error(`Error listing all items: ${error}`);
    });
};
