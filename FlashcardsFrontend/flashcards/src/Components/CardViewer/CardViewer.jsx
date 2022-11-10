import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import axios from "axios";
import UpdateCardForm from "../UpdateCardForm/UpdateCardForm";

const CardViewer = ({ collectionSelection }) => {
  const [cards, setCards] = useState([]);
  const [i, setIndex] = useState(0);
  const [showDefinition, setShowDefinition] = useState(false);

  function flipCard() {
    setShowDefinition(!showDefinition);
  }

  useEffect(() => {
    getCards();
    setIndex(0);
    setShowDefinition(false);
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
    setShowDefinition(false);
  }

  function previousCard() {
    if (i == 0) {
      setIndex(cards.length - 1);
    } else {
      setIndex(i - 1);
    }
    setShowDefinition(false);
  }

  if (cards.length > 0) {
    return (
      <div>
        <Card
          card={cards[i]}
          setShowDefinition={setShowDefinition}
          showDefinition={showDefinition}
        />
        <button onClick={previousCard}> &lt; </button>
        <p>
          {i + 1} / {cards.length}
        </p>
        <button onClick={nextCard}> &gt; </button>
        <UpdateCardForm
          card={cards[i]}
          collection={collectionSelection}
          getCards={getCards}
        />
      </div>
    );
  } else {
    return <div>Please select a populated collection to continue</div>;
  }
};

export default CardViewer;
