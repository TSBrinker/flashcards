import React, { useState } from "react";
import "./Collection.css";

const Collection = ({ name, id, setCollectionSelection }) => {
  function handleSelection() {
    setCollectionSelection(id);
  }

  return <div onClick={handleSelection}>{name}</div>;
};

export default Collection;
