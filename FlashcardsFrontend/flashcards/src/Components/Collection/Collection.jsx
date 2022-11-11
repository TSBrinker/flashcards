import React, { useState, useEffect } from "react";
import "./Collection.css";

const Collection = ({
  name,
  id,
  setCollectionSelection,
  collectionSelection,
}) => {
  const [activeStatus, setActiveStatus] = useState("inactive");

  function handleSelection() {
    setCollectionSelection(id);
    setActiveStatus("active");
  }

  useEffect(() => {
    if (collectionSelection != id) {
      setActiveStatus("inactive");
    } else {
      setActiveStatus("active");
    }
  }, [collectionSelection]);

  return (
    <div className={activeStatus} onClick={handleSelection}>
      {name}
    </div>
  );
};

export default Collection;
