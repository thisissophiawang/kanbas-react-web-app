import { Route, Routes } from "react-router";
import Courses from "./Courses";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import "./styles.css"; // Ensure this path is correct

export default function Kanbas() {
  return (
    <div id="wd-kanbas" className="d-flex">
      <KanbasNavigation />
      <div className="wd-main-content-offset p-3 flex-grow-1">
        <Routes>
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Courses/*" element={<Courses />} />
        </Routes>
      </div>
    </div>
  );
}
