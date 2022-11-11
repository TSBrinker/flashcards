import React from "react";
import Collection from "../Collection/Collection";

const CollectionContainer = ({
  collections,
  setCollectionSelection,
  collectionSelection,
}) => {
  return collections.map((collection) => {
    return (
      <ul>
        <li>
          <Collection
            name={collection.title}
            id={collection.id}
            setCollectionSelection={setCollectionSelection}
            collectionSelection={collectionSelection}
          />
        </li>
      </ul>
    );
  });
};

export default CollectionContainer;
