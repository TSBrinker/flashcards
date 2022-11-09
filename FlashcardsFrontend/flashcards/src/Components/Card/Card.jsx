import React from "react";

const Card = ({ card }) => {
  return (
    <div>
      {card.word}:<br />
      {card.definition}
      <br />
    </div>
  );
};

export default Card;
