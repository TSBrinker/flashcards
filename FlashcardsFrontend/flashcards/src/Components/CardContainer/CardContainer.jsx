import React, { useState } from "react";
import CardViewer from "../CardViewer/CardViewer";
import NewCardForm from "../NewCardForm/NewCardForm";

const CardContainer = (props) => {
  return (
    <div>
      <CardViewer />
      <NewCardForm />
    </div>
  );
};

export default CardContainer;
