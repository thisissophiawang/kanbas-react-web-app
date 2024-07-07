import React from "react";
import Labs from "./Labs";
import Kanbas from "./Kanbas"; // 确保正确导入Kanbas组件
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/Labs" />} />
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kanbas/*" element={<Kanbas />} />
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
