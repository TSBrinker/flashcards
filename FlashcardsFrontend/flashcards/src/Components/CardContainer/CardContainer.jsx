import React from "react";
import CardViewer from "../CardViewer/CardViewer";
import NewCardForm from "../NewCardForm/NewCardForm";

const CardContainer = ({ collectionSelection }) => {
  return (
    <div>
      <CardViewer collectionSelection={collectionSelection} />
      <NewCardForm />
    </div>
  );
};
export default CardContainer;
