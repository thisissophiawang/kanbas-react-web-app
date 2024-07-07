import React from 'react';
import KanbasNavigation from './Navigation';
import Dashboard from './Dashboard';
import Courses from './Courses';
import { Route, Routes } from 'react-router';

export default function Kanbas() {
  return (
    <div id="wd-kanbas">
      <table border={1} width="100%">
        <tbody>
          <tr>
            <td valign="top">
              <KanbasNavigation />
            </td>
            <td valign="top">
              <Routes>
                <Route path="Courses/*" element={<Courses />} />
                <Route path="Dashboard" element={<Dashboard />} />
                {/* Add other routes as needed */}
              </Routes>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
