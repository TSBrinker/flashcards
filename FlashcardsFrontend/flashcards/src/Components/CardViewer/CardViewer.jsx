import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import DeleteCardButton from "../DeleteCardButton/DeleteCardButton";
import UpdateCardForm from "../UpdateCardForm/UpdateCardForm";
import NewCardForm from "../NewCardForm/NewCardForm";

const CardViewer = ({ collectionSelection, cards, getCards }) => {
  const [i, setIndex] = useState(0);
  const [showDefinition, setShowDefinition] = useState(false);
  const [display, setDisplay] = useState("view");

  useEffect(() => {
    setIndex(0);
    setShowDefinition(false);
    setDisplay("view");
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
    setDisplay("update");
  }

  function handleCreateMenu(event) {
    event.preventDefault();
    setDisplay("create");
  }

  if (cards[i]) {
    if (display === "view") {
      return (
        <div>
          <Card
            card={cards[i]}
            setShowDefinition={setShowDefinition}
            showDefinition={showDefinition}
          />
          <h3 onClick={previousCard}> &lt; </h3>
          <p>
            {i + 1} / {cards.length}
          </p>
          <h3 onClick={nextCard}> &gt; </h3>

          <button onClick={handleUpdateMenu}>Update This Flashcard</button>

          <DeleteCardButton
            card={cards[i]}
            collection={collectionSelection}
            getCards={getCards}
          />
          <button onClick={handleCreateMenu}>Create New Flashcard</button>
        </div>
      );
    } else if (display === "update") {
      return (
        <UpdateCardForm
          card={cards[i]}
          collection={collectionSelection}
          getCards={getCards}
          setDisplay={setDisplay}
        />
      );
    } else if (display === "create") {
      return (
        <NewCardForm
          collection={collectionSelection}
          getCards={getCards}
          setDisplay={setDisplay}
        />
      );
    }
  } else {
    return <div>Please select a populated collection to continue</div>;
  }
};

export default CardViewer;
