import React from "react";
import Labs from "./Labs";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import logo from "./logo.svg";

function App() {
  return (
    <HashRouter>
      <div>
        <h1>Xinyi Wang/Sophia</h1>
        <Routes>
          <Route path="/Labs" element={<Labs />} />
        </Routes>
        {/* Kanbas */}
        <a href="https://github.com/thisissophiawang/kanbas-react-web-app/tree/a1">
          Github
        </a>
      </div>
    </HashRouter>
  );
}

export default App;
