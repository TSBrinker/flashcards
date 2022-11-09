import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import axios from "axios";

const CardViewer = ({ collectionSelection }) => {
  const [cards, setCards] = useState([]);
  const [i, setIndex] = useState(0);

  useEffect(() => {
    getCards();
  }, [collectionSelection]);

  async function getCards() {
    let response = await axios.get(
      `http://127.0.0.1:8000/api/collections/${collectionSelection}/cards/`
    );
    setCards(response.data);
  }

  // console.log(cards);
  // console.log(i);
  // console.log(cards[i]);
  // console.log("here's the active card");
  // console.log();

  if (cards.length > 0) {
    return <Card card={cards[i]} />;
  } else {
    return <div>Please select a collection to continue</div>;
  }
};

export default CardViewer;
