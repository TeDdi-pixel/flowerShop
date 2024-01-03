import { useEffect, useState } from "react";
import { getData } from "./helpers/getData";
import { getUrls } from "./helpers/getUrls";

const useCollections = (collectionName, folder) => {
  const [urls, setUrls] = useState([]);
  const [collectionsData, setCollectionsData] = useState([]);
  // first get the path to all images
  useEffect(() => {
    getUrls(folder, setUrls);
  }, []);
  // then put all that urls to db
  useEffect(() => {
    if (urls.length > 0) {
      getData(collectionName, urls, setCollectionsData);
    }
  }, [urls]);

  return { collectionsData };
};

export default useCollections;
