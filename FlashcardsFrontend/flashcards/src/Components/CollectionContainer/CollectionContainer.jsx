import React, { useState } from "react";
import Collection from "../Collection/Collection";

const CollectionContainer = ({ collections }) => {
  return collections.map((collection) => {
    return <Collection name={collection.title} id={collection.id} />;
  });
};

export default CollectionContainer;
