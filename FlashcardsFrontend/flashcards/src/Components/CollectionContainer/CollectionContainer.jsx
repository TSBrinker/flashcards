import React from "react";
import Collection from "../Collection/Collection";

const CollectionContainer = ({ collections, setCollectionSelection }) => {
  return collections.map((collection) => {
    return (
      <ul>
        <li>
          <Collection
            name={collection.title}
            id={collection.id}
            setCollectionSelection={setCollectionSelection}
          />
        </li>
      </ul>
    );
  });
};

export default CollectionContainer;
