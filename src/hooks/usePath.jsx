import { useEffect, useState } from "react";

const usePath = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname.substring(1));

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname.substring(1));
    };

    window.addEventListener("popstate", handleLocationChange);

    return () => {
      window.removeEventListener("popstate", handleLocationChange);
    };
  });

  return { currentPath };
};

export default usePath;
