import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import axios from "axios";
import React, { useState, useEffect } from "react";

function App() {
  const [collections, setCollections] = useState([]);
  const [collectionSelection, setCollectionSelection] = useState(1);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    getAllCollections();
  }, []);

  useEffect(() => {
    getCards();
  }, [collectionSelection]);

  async function getAllCollections() {
    let response = await axios.get("http://127.0.0.1:8000/api/collections/");
    setCollections(response.data);
  }

  async function getCards() {
    let response = await axios.get(
      `http://127.0.0.1:8000/api/collections/${collectionSelection}/cards/`
    );
    setCards(response.data);
  }
  console.log(`Button pressed for collection ${collectionSelection}`);
  console.log(cards);

  return (
    <div className="App">
      <Header />
      <Main
        collections={collections}
        setCollectionSelection={setCollectionSelection}
      />
      <p>Selected Collection: {collectionSelection}</p>
    </div>
  );
}

export default App;
