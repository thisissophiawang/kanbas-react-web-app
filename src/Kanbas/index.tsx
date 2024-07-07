import React from "react";
import KanbasNavigation from "./Navigation"; 
import Dashboard from "./Dashboard"; 

const Kanbas = () => {
  return (
    <div id="wd-kanbas">
      <h1>Kanbas</h1>
      <KanbasNavigation />
      <Dashboard />
    </div>
  );
};

export default Kanbas;
