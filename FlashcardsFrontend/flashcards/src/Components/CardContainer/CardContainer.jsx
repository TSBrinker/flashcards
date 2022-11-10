import React, { useState, useEffect } from "react";
import CardViewer from "../CardViewer/CardViewer";
import NewCardForm from "../NewCardForm/NewCardForm";
import axios from "axios";

const CardContainer = ({ collectionSelection }) => {
  const [cards, setCards] = useState([]);

  async function getCards() {
    let response = await axios.get(
      `http://127.0.0.1:8000/api/collections/${collectionSelection}/cards/`
    );
    setCards(response.data);
  }

  useEffect(() => {
    getCards();
  }, [collectionSelection]);

  return (
    <div>
      <CardViewer
        collectionSelection={collectionSelection}
        cards={cards}
        getCards={getCards}
      />
    </div>
  );
};
export default CardContainer;
