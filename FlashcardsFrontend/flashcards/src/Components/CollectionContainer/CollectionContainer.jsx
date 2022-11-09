import React, { useState } from "react";
import Collection from "../Collection/Collection";

const CollectionContainer = ({ collections, setCollectionSelection }) => {
  return collections.map((collection) => {
    return (
      <Collection
        name={collection.title}
        id={collection.id}
        setCollectionSelection={setCollectionSelection}
      />
    );
  });
};

export default CollectionContainer;
