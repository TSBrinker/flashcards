import React, { useState } from "react";
import Card from "../Card/Card";

const NewCardForm = (props) => {
  return (
    <form>
      <input required placeholder="Title" />
      <input required placeholder="Definition" />
      <button>Create New Card</button>
    </form>
  );
};

export default NewCardForm;
