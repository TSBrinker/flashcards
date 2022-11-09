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

  function nextCard() {
    if (i == cards.length - 1) {
      setIndex(0);
    } else {
      setIndex(i + 1);
    }
  }

  function previousCard() {
    if (i == 0) {
      setIndex(cards.length - 1);
    } else {
      setIndex(i - 1);
    }
  }

  if (cards.length > 0) {
    return (
      <div>
        <Card card={cards[i]} />
        <button onClick={previousCard}> &lt; </button>
        <button onClick={nextCard}> &gt; </button>
      </div>
    );
  } else {
    return <div>Please select a collection to continue</div>;
  }
};

export default CardViewer;
