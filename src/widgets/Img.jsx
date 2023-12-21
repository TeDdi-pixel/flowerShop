import React, { useEffect, useState } from "react";
import { storage } from "../services/firebase-config";
import { getDownloadURL, listAll, ref } from "firebase/storage";

const Img = () => {
  const [urls, setUrls] = useState("");

  useEffect(() => {
    listAll(ref(storage, "collectionsImg"))
      .then((res) => {
        return Promise.all(res.items.map((item) => getDownloadURL(item)));
      })
      .then((urls) => {
        setUrls(urls);
        console.log(urls);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      {urls.map((url, index) => {
        return <img key={index} src={url} alt="From Firebase Storage" />;
      })}
    </div>
  );
};

export default Img;
