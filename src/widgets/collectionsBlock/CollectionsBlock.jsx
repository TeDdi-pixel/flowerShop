import React from "react";
import MainTitle from "../../shared/mainTitle/MainTitle";
import Collections from "../../entities/collections/Collections";

const CollectionsBlock = () => {
  return (
    <div>
      <MainTitle title={"OUR COLLECTIONS"} />
      <Collections />
    </div>
  );
};

export default CollectionsBlock;
