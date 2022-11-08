import React, { useState } from "react";

const NewCardForm = (props) => {
  return (
    <form>
      <input required placeholder="Title" />
      <input required placeholder="Definition" />
      <button>Let'sa go!</button>
    </form>
  );
};

export default NewCardForm;
