import { useEffect, useMemo, useState, useCallback } from "react";
import { getData } from "./helpers/getData";
import { getUrls } from "./helpers/getUrls";

const useCollections = (collectionName, folder) => {
  const [urls, setUrls] = useState([]);
  const [collectionsData, setCollectionsData] = useState([]);

  const getUrlsCallback = useCallback(() => getUrls(folder,setUrls), [folder]);
  const getDataCallback = useCallback(() => getData(collectionName, urls, setCollectionsData), [collectionName, urls]);

  useEffect(() => {
    getUrlsCallback();
  }, [getUrlsCallback]);

  useEffect(() => {
    if (urls.length > 0) {
      getDataCallback();
    }
  }, [urls, getDataCallback]);

  return { collectionsData };
};

export default useCollections;

