import React from "react";
import KanbasNavigation from "./Navigation"; 
import Dashboard from "./Dashboard"; 

export default function Kanbas() {
  return (
    <div id="wd-kanbas">
      <table>
        <tr>
          <td valign="top">
            <KanbasNavigation />
          </td>
          <td valign="top">
            <Dashboard />
          </td>
        </tr>
      </table>
    </div>
);}

