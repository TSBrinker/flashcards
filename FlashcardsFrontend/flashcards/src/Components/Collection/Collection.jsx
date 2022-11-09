import React, { useState } from "react";

const Collection = ({ name, id, setCollectionSelection }) => {
  function handleSelection() {
    setCollectionSelection(id);
  }

  return (
    <button onClick={handleSelection}>
      {id}: {name}
    </button>
  );
};

export default Collection;
