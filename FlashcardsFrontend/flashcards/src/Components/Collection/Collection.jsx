import React, { useState } from "react";
import "./Collection.css";

const Collection = ({ name, id, setCollectionSelection }) => {
  function handleSelection() {
    setCollectionSelection(id);
  }

  return <button onClick={handleSelection}>{name}</button>;
};

export default Collection;
