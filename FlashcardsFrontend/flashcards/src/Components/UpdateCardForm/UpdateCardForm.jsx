import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import "./UpdateCardForm.css";

const UpdateCardForm = ({ card, collection, getCards, setDisplay }) => {
  const [cardWord, setCardWord] = useState(card.word);
  const [cardDefinition, setCardDefinition] = useState(card.definition);

  useEffect(() => {
    setCardWord(card.word);
    setCardDefinition(card.definition);
  }, [card]);

  async function updateCard() {
    let updatedCard = {
      word: cardWord,
      definition: cardDefinition,
      collection_id: collection,
    };
    let response = await axios.put(
      `http://127.0.0.1:8000/api/collections/${collection}/cards/${card.id}/`,
      updatedCard
    );
    if ((response.status = 200)) {
      await getCards();
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    updateCard();
    setDisplay("view");
  }

  return (
    <form>
      <input
        type="text"
        value={cardWord}
        onChange={(event) => setCardWord(event.target.value)}
      />
      <textarea
        rows="4"
        cols="50"
        required
        onChange={(event) => setCardDefinition(event.target.value)}
      >
        {cardDefinition}
      </textarea>
      <button onClick={handleSubmit}>Confirm Card Text</button>
    </form>
  );
};

export default UpdateCardForm;
