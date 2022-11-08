import React, { useState } from "react";

import Sidebar from "../Sidebar/Sidebar";
import CardContainer from "../CardContainer/CardContainer";

const Main = (props) => {
  return (
    <div>
      <Sidebar />
      <CardContainer />
    </div>
  );
};

export default Main;
