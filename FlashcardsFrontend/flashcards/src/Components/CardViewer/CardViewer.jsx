import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import DeleteCardDisplay from "../DeleteCardDisplay/DeleteCardDisplay";
import UpdateCardForm from "../UpdateCardForm/UpdateCardForm";
import NewCardForm from "../NewCardForm/NewCardForm";
import "./CardViewer.css";

const CardViewer = ({ collectionSelection, cards, getCards }) => {
  const [i, setIndex] = useState(0);
  const [showDefinition, setShowDefinition] = useState(false);
  const [display, setDisplay] = useState("view");

  useEffect(() => {
    setIndex(0);
    setShowDefinition(false);
    setDisplay("view");
  }, [collectionSelection, cards.length]);

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

  function handleDisplay(setting, event) {
    event.preventDefault();
    setDisplay(setting);
  }

  if (cards[i]) {
    if (display === "view") {
      return (
        <div>
          <container className="button-container">
            <button onClick={(event) => handleDisplay("update", event)}>
              Update This Card
            </button>
            <button onClick={(event) => handleDisplay("delete", event)}>
              Delete This Card
            </button>
          </container>
          <span className="card-display">
            <Card
              card={cards[i]}
              setShowDefinition={setShowDefinition}
              showDefinition={showDefinition}
            />
          </span>
          <container className="nav-display">
            <p onClick={previousCard}> &lt; </p>
            <p>
              {i + 1} / {cards.length}
            </p>
            <p onClick={nextCard}> &gt; </p>
          </container>
          <container className="button-container">
            <button onClick={(event) => handleDisplay("create", event)}>
              Create New Flashcard
            </button>
          </container>
        </div>
      );
    } else if (display === "update") {
      return (
        <div className="card-display">
          <UpdateCardForm
            card={cards[i]}
            collection={collectionSelection}
            getCards={getCards}
            setDisplay={setDisplay}
          />
        </div>
      );
    } else if (display === "create") {
      return (
        <div className="card-display">
          <NewCardForm
            collection={collectionSelection}
            getCards={getCards}
            setDisplay={setDisplay}
            handleDisplay={handleDisplay}
          />
        </div>
      );
    } else if (display === "delete") {
      return (
        <div className="card-display">
          <DeleteCardDisplay
            card={cards[i]}
            collection={collectionSelection}
            getCards={getCards}
            setDisplay={setDisplay}
            handleDisplay={handleDisplay}
          />
        </div>
      );
    }
  } else {
    return <div>Please select a populated collection to continue</div>;
  }
};

export default CardViewer;
