import React from "react";
import CollectionContainer from "../CollectionContainer/CollectionContainer";
import "./Sidebar.css";

const Sidebar = ({
  collections,
  setCollectionSelection,
  collectionSelection,
}) => {
  return (
    <div className="column">
      <h2>Collections</h2>
      <CollectionContainer
        collections={collections}
        setCollectionSelection={setCollectionSelection}
        collectionSelection={collectionSelection}
      />
    </div>
  );
};

export default Sidebar;
