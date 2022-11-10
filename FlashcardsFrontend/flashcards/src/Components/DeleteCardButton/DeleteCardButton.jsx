import React, { useState, useEffect } from "react";
import axios from "axios";

const DeleteCardButton = ({ card, collection, getCards }) => {
  const [confirmationMessage, setConfirmationMessage] = useState(false);

  async function deleteCard() {
    let response = await axios.delete(
      `http://127.0.0.1:8000/api/collections/${collection}/cards/${card.id}/`
    );
    if ((response.status = 204)) {
      await getCards();
    }
  }

  function handleConfirmation(event) {
    event.preventDefault();
    deleteCard();
    setConfirmationMessage(false);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setConfirmationMessage(true);
  }

  return confirmationMessage ? (
    <div>
      <p>Word: {card.word}</p>
      <p>Definition: {card.definition}</p>
      <p>Are you sure you want to delete this card?</p>
      <button onClick={handleConfirmation}>
        I'm sure, get it out of here!
      </button>
    </div>
  ) : (
    <button onClick={handleSubmit}>Delete This Flashcard</button>
  );
};

export default DeleteCardButton;
