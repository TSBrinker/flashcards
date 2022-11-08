import React, { useState } from "react";

import Sidebar from "../Sidebar/Sidebar";
import CardContainer from "../CardContainer/CardContainer";

const Main = ({ collections }) => {
  return (
    <div>
      <Sidebar collections={collections} />
      <CardContainer />
    </div>
  );
};

export default Main;
