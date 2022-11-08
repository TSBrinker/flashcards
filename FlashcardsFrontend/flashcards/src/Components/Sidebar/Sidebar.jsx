import React, { useState } from "react";
import CollectionContainer from "../CollectionContainer/CollectionContainer";

const Sidebar = ({
  collections,
  collectionSelection,
  setCollectionSelection,
}) => {
  return (
    <div>
      <h2>Collections</h2>
      <CollectionContainer
        collections={collections}
        collectionSelection={collectionSelection}
        setCollectionSelection={setCollectionSelection}
      />
    </div>
  );
};

export default Sidebar;
