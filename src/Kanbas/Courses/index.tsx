// src/Kanbas/Courses/index.tsx
import React from 'react';
import CoursesNavigation from './Navigation';
import Home from './Home';
import Modules from './Modules';
import Assignments from './Assignments';
import { Navigate, Route, Routes } from 'react-router';

export default function Courses() {
  return (
    <div id="wd-courses">
      <h2>Course 1234</h2>
      <hr />
      <table>
        <tr>
          <td valign="top">
            <CoursesNavigation />
          </td>
          <td valign="top">
            <Routes>
              <Route path="/" element={<Navigate to="Home" />} />
              <Route path="Home" element={<Home />} />
              <Route path="Modules" element={<Modules />} />
              <Route path="Assignments" element={<Assignments />} />
              <Route path="Assignments/:id" element={<h3>Assignment Editor</h3>} />
            </Routes>
          </td>
        </tr>
      </table>
    </div>
  );
}
