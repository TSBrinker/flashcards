import React, { useEffect } from "react";
import axios from "axios";

const DeleteCardButton = ({ card, collection, getCards }) => {
  async function deleteCard() {
    let response = await axios.delete(
      `http://127.0.0.1:8000/api/collections/${collection}/cards/${card.id}/`
    );
    if ((response.status = 204)) {
      await getCards();
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    deleteCard();
  }

  return <button onClick={handleSubmit}>Delete This Flashcard</button>;
};

export default DeleteCardButton;
