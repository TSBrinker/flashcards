import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import DeletePostButton from "../DeleteCardButton/DeleteCardButton";
import UpdateCardForm from "../UpdateCardForm/UpdateCardForm";

const CardViewer = ({ collectionSelection, cards, getCards }) => {
  const [i, setIndex] = useState(0);
  const [showDefinition, setShowDefinition] = useState(false);
  const [openUpdateForm, setOpenUpdateForm] = useState(false);

  useEffect(() => {
    setIndex(0);
    setShowDefinition(false);
  }, [collectionSelection, cards]);

  function nextCard() {
    if (i == cards.length - 1) {
      setIndex(0);
    } else {
      setIndex(i + 1);
    }
    setShowDefinition(false);
  }

  function previousCard() {
    if (i == 0) {
      setIndex(cards.length - 1);
    } else {
      setIndex(i - 1);
    }
    setShowDefinition(false);
  }

  function handleUpdateMenu(event) {
    event.preventDefault();
    setOpenUpdateForm(true);
  }

  if (cards[i]) {
    return openUpdateForm ? (
      <UpdateCardForm
        card={cards[i]}
        collection={collectionSelection}
        getCards={getCards}
        setOpenUpdateForm={setOpenUpdateForm}
      />
    ) : (
      <div>
        <Card
          card={cards[i]}
          setShowDefinition={setShowDefinition}
          showDefinition={showDefinition}
        />
        <button onClick={previousCard}> &lt; </button>
        <p>
          {i + 1} / {cards.length}
        </p>
        <button onClick={nextCard}> &gt; </button>

        <button onClick={handleUpdateMenu}>Update This Flashcard</button>

        <DeletePostButton
          card={cards[i]}
          collection={collectionSelection}
          getCards={getCards}
        />
      </div>
    );
  } else {
    return <div>Please select a populated collection to continue</div>;
  }
};

export default CardViewer;
