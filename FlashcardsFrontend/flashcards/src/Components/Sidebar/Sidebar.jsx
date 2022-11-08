import React, { useState } from "react";
import CollectionContainer from "../CollectionContainer/CollectionContainer";

const Sidebar = ({ collections }) => {
  return (
    <div>
      <h2>Collections</h2>
      <CollectionContainer collections={collections} />
    </div>
  );
};

export default Sidebar;
