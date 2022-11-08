import React, { useState } from "react";

const Collection = ({ collections }) => {
  let i = 0;
  const [collectionSelection, setCollectionSelection] = useState(1);

  console.log("I'm in the collection page");
  console.log(collections);

  return collections.map((collection) => {
    return <div>{collection.title}</div>;
  });
};

export default Collection;
