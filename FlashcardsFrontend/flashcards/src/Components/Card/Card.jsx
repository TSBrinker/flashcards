import React from "react";
import "./Card.css";

const Card = ({ card, setShowDefinition, showDefinition }) => {
  function flipCard() {
    setShowDefinition(!showDefinition);
  }

  return showDefinition ? (
    <h2 className="card-text" onClick={flipCard}>
      {card.definition}
    </h2>
  ) : (
    <h2 className="card-text" onClick={flipCard}>
      {card.word}
    </h2>
  );
};

export default Card;
