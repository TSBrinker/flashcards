import React, { useState } from "react";

const Card = ({ word, definition }) => {
  return (
    <div>
      {word}:<br />
      {definition}
      <br />
    </div>
  );
};

export default Card;
