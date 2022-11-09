import React, { useState } from "react";

import Sidebar from "../Sidebar/Sidebar";
import CardContainer from "../CardContainer/CardContainer";

const Main = ({ collections, setCollectionSelection }) => {
  return (
    <div>
      <Sidebar
        collections={collections}
        setCollectionSelection={setCollectionSelection}
      />
      <CardContainer />
    </div>
  );
};

export default Main;
