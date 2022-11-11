import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../Sidebar/Sidebar";
import CardContainer from "../CardContainer/CardContainer";
import "./Main.css";

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

  return (
    <div className="main-body">
      <Sidebar
        collections={collections}
        setCollectionSelection={setCollectionSelection}
      />
      <CardContainer collectionSelection={collectionSelection} />
    </div>
  );
};
export default Main;
