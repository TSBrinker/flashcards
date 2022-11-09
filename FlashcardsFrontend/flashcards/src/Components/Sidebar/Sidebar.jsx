import React from "react";
import CollectionContainer from "../CollectionContainer/CollectionContainer";

const Sidebar = ({ collections, setCollectionSelection }) => {
  return (
    <div>
      <h2>Collections</h2>
      <CollectionContainer
        collections={collections}
        setCollectionSelection={setCollectionSelection}
      />
    </div>
  );
};

export default Sidebar;
