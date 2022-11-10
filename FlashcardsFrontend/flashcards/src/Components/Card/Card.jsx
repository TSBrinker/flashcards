import React from "react";

const Card = ({ card, setShowDefinition, showDefinition }) => {
  function flipCard() {
    setShowDefinition(!showDefinition);
  }

  return showDefinition ? (
    <h4 onClick={flipCard}>{card.definition}</h4>
  ) : (
    <h3 onClick={flipCard}>{card.word}</h3>
  );
};

export default Card;
