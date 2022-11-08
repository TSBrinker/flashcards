import React, { useState } from "react";
import Collection from "../Collection/Collection";

const CollectionContainer = ({ collections }) => {
  return <Collection collections={collections} />;
};

export default CollectionContainer;
