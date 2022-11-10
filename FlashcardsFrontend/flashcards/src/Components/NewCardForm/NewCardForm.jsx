import axios from "axios";
import React, { useState, useEffect } from "react";

const NewCardForm = ({ collection, cards, getCards }) => {
  const [cardWord, setCardWord] = useState();
  const [cardDefinition, setCardDefinition] = useState();

  async function createCard() {
    let newCard = {
      word: cardWord,
      definition: cardDefinition,
      collection_id: collection,
    };
    let response = await axios.post(
      `http://127.0.0.1:8000/api/collections/${collection}/cards/`,
      newCard
    );
    if ((response.status = 201)) {
      await getCards();
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    createCard();
    setCardDefinition("");
    setCardWord("");
  }

  return (
    <form>
      <input
        required
        placeholder="Word"
        value={cardWord}
        onChange={(event) => setCardWord(event.target.value)}
      />
      <input
        required
        placeholder="Definition"
        value={cardDefinition}
        onChange={(event) => setCardDefinition(event.target.value)}
      />
      <button onClick={handleSubmit}>Create New Card</button>
    </form>
  );
};

export default NewCardForm;
