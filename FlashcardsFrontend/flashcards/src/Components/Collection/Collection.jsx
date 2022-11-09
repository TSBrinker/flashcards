import React, { useState } from "react";

const Collection = ({ name, id, setCollectionSelection }) => {
  function handleSelection(event) {
    event.preventDefault();
    console.log(id);
    console.log("^ This one's IN the function");
    setCollectionSelection(id);
  }

  return (
    <button onClick={handleSelection}>
      {name}, {id}
    </button>
  );
};

export default Collection;
