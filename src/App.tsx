import React from "react";
import Kanbas from "./Kanbas";
import Labs from "./Labs";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/Kanbas" />} />
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kanbas/*" element={<Kanbas />} />
        </Routes>
        <a href="https://github.com/thisissophiawang/kanbas-react-web-app/tree/a1">
          Github
        </a>
      </div>
    </HashRouter>
  );
}

export default App;
