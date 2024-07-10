import React from "react";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import Kanbas from "./Kanbas";
import LandingPage from "./LandingPage";
import Lab1 from "./Labs/Lab1";
import Lab2 from "./Labs/Lab2";
import Lab3 from "./Labs/Lab3";

function App() {
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/LandingPage" />} />
          <Route path="/Kanbas/*" element={<Kanbas />} />
          <Route path="/LandingPage" element={<LandingPage />} />
          <Route path="/Lab1" element={<Lab1 />} />
          <Route path="/Lab2" element={<Lab2 />} />
          <Route path="/Lab3" element={<Lab3 />} />
        </Routes>
        <a href="https://github.com/thisissophiawang/kanbas-react-web-app/tree/a1">Github</a>
      </div>
    </HashRouter>
  );
}

export default App;
