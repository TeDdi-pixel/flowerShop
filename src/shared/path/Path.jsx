import React from "react";
import usePath from "../../hooks/usePath";

const Path = () => {
  const { currentPath } = usePath();

  return (
    <div className="current-path">
      <div className="current-path__text">{currentPath}</div>
    </div>
  );
};

export default Path;
