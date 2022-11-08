import React, { useState } from "react";

import Sidebar from "../Sidebar/Sidebar";
import CardContainer from "../CardContainer/CardContainer";

const Main = ({ collections, collectionSelection, setCollectionSelection }) => {
  return (
    <div>
      <Sidebar
        collections={collections}
        collectionSelection={collectionSelection}
        setCollectionSelection={setCollectionSelection}
      />
      <CardContainer />
    </div>
  );
};

export default Main;
