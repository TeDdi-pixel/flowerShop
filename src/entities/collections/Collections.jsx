import React from "react";
import CollectionItem from "../../shared/collectionItem/CollectionItem";
import useCollections from "../../hooks/useCollections";

const Collections = () => {
  const { collectionsData } = useCollections("collections", "collectionsImg");
  return (
    <div className="collections">
      <div className="collections__wrapper">
        {collectionsData.map((collection) => {
          return (
            <CollectionItem
              key={collection.id}
              bgImg={collection.imageUrl}
              title={collection.title}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Collections;
