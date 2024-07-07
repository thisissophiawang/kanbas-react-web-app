import React from "react";
import KanbasNavigation from "./Navigation"; 
import Dashboard from "./Dashboard"; 
import Courses from "./Courses";
import { Routes, Route } from "react-router-dom";

export default function Kanbas() {
  return (
    <div id="wd-kanbas">
      <table border={1} width="100%">
        <tr>
          <td valign="top">
            <KanbasNavigation />
          </td>
          <td valign="top">
            <Routes>
              <Route path="Courses/*" element={<Courses />} />
              <Route path="Dashboard" element={<Dashboard />} />
            </Routes>
          </td>
        </tr>
      </table>
    </div>
  );
}
