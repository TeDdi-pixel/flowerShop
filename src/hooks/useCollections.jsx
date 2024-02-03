import { useEffect, useState, useCallback } from "react";
import { getData } from "../helpers/hooks/getData";
import { getUrls } from "../helpers/hooks/getUrls";

const useCollections = (collectionName, folder) => {
  const [urls, setUrls] = useState([]);
  const [collectionsData, setCollectionsData] = useState([]);

  const getUrlsCallback = useCallback(() => getUrls(folder, setUrls), [folder]);
  const getDataCallback = useCallback(
    () => getData(collectionName, urls, setCollectionsData),
    [collectionName, urls]
  );

  useEffect(() => {
    getUrlsCallback();
  }, [getUrlsCallback]);

  useEffect(() => {
    if (urls.length > 0) {
      getDataCallback();
    }
  }, [collectionName, urls, getDataCallback]);
  return { collectionsData };
  
};

export default useCollections;
