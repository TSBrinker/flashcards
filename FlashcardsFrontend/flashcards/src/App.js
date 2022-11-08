import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import axios from 'axios';
import React, { useState, useEffect } from 'react';


function App() {
  const [collections, setCollections] = useState([]);
  const [collectionSelection, setCollectionSelection] = useState(1);

  useEffect(() => {
    getAllCollections();
  }, [])
  
  async function getAllCollections() {
    let response = await axios.get("http://127.0.0.1:8000/api/collections/");
    setCollections(response.data);
  }

  return (
    <div className="App">
      <Header />
      <Main collections={collections} collectionSelection={collectionSelection} setCollectionSelection={setCollectionSelection}/>
    </div>
  );
}

export default App;
