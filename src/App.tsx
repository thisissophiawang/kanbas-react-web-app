import React from "react";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import Kanbas from "./Kanbas";
import LandingPage from "./Kanbas/Landing Page";

function App() {
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/Kanbas" />} />
          <Route path="/Kanbas/*" element={<Kanbas />} />
          <Route path="/Kanbas" element={<LandingPage />} />
        </Routes>
        <a href="https://github.com/thisissophiawang/kanbas-react-web-app/tree/a1">Github</a>
      </div>
    </HashRouter>
  );
}

export default App;
