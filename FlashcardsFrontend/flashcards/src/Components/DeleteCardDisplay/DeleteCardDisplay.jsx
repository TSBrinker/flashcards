import React from "react";
import axios from "axios";

const DeleteCardDisplay = ({
  card,
  collection,
  getCards,
  setDisplay,
  handleDisplay,
}) => {
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
    setDisplay("view");
  }

  return (
    <div>
      <p>Word: {card.word}</p>
      <p>Definition: {card.definition}</p>
      <p>Are you sure you want to delete this card?</p>
      <container>
        <h4 onClick={handleConfirmation}>Delete</h4>
        <h4 onClick={(event) => handleDisplay("view", event)}>Cancel</h4>
      </container>
    </div>
  );
};

export default DeleteCardDisplay;
