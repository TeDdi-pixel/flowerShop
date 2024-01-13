import { useEffect, useState } from "react";

const usePath = () => {
  const getPath = () => {
    const path = window.location.pathname;
    return path === '/' ? path : path.substring(1);
  };

  const [currentPath, setCurrentPath] = useState(getPath());

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(getPath());
    };

    window.addEventListener("popstate", handleLocationChange);

    return () => {
      window.removeEventListener("popstate", handleLocationChange);
    };
  });

  return { currentPath };
};


export default usePath;
