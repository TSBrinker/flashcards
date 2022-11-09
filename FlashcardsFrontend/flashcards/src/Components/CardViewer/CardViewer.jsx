import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import axios from "axios";

const CardViewer = ({ collectionSelection }) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    getCards();
  }, [collectionSelection]);

  async function getCards() {
    let response = await axios.get(
      `http://127.0.0.1:8000/api/collections/${collectionSelection}/cards/`
    );
    setCards(response.data);
  }

  console.log(cards);

  return cards.map((card) => {
    return <Card word={card.word} definition={card.definition} />;
  });
};

export default CardViewer;
