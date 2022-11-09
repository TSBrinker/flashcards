import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import axios from "axios";
import React, { useState, useEffect } from "react";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
