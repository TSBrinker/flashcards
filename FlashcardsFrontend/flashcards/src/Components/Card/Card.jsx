import React, { useState } from "react";

const Card = ({ card, setShowDefinition, showDefinition }) => {
  function flipCard() {
    setShowDefinition(!showDefinition);
  }

  return showDefinition ? (
    <div className="container" onClick={flipCard}>
      {card.definition}
    </div>
  ) : (
    <div className="container" onClick={flipCard}>
      {card.word}
    </div>
  );
};

export default Card;
