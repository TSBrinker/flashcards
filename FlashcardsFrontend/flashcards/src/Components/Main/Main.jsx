import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../Sidebar/Sidebar";
import CardContainer from "../CardContainer/CardContainer";

const Main = ({}) => {
  const [collections, setCollections] = useState([]);
  const [collectionSelection, setCollectionSelection] = useState(1);

  useEffect(() => {
    getAllCollections();
  }, []);

  async function getAllCollections() {
    let response = await axios.get("http://127.0.0.1:8000/api/collections/");
    setCollections(response.data);
  }

  console.log(`Button pressed for collection ${collectionSelection}`);

  return (
    <div>
      <Sidebar
        collections={collections}
        setCollectionSelection={setCollectionSelection}
      />
      <CardContainer collectionSelection={collectionSelection} />
      <p>Selected Collection: {collectionSelection}</p>
    </div>
  );
};
export default Main;
