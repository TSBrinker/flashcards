import React from "react";
import "./Card.css";

const Card = ({ card, setShowDefinition, showDefinition }) => {
  function flipCard() {
    setShowDefinition(!showDefinition);
  }

  return showDefinition ? (
    <h2 onClick={flipCard}>{card.definition}</h2>
  ) : (
    <h1 onClick={flipCard}>{card.word}</h1>
  );
};

export default Card;
