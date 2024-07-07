// src/Kanbas/Courses/Assignments/index.tsx
import React from 'react';
import { Routes, Route } from 'react-router';
import AssignmentEditor from './Editor';

export default function Assignments() {
  return (
    <div id="wd-assignments">
      <input id="wd-search-assignment" placeholder="Search for Assignments"/>
      <button id="wd-add-assignment-group">+ Group</button>
      <button id="wd-add-assignment">+ Assignment</button>
      <h3 id="wd-assignments-title">ASSIGNMENTS 40% of Total</h3>
      <ul id="wd-assignment-list">
        <li className="wd-assignment-list-item">
          <a className="wd-assignment-link" href="#/Kanbas/Courses/Assignments/123">A1 - ENV + HTML</a>
          <span>Multiple Modules | Not available until May 6 at 12:00am | Due May 13 at 11:59pm | 100 pts</span>
        </li>
        <li className="wd-assignment-list-item">
          <a className="wd-assignment-link" href="#/Kanbas/Courses/Assignments/124">A2 - CSS + BOOTSTRAP</a>
          <span>Multiple Modules | Not available until May 13 at 12:00am | Due May 20 at 11:59pm | 100 pts</span>
        </li>
        <li className="wd-assignment-list-item">
          <a className="wd-assignment-link" href="#/Kanbas/Courses/Assignments/125">A3 - JAVASCRIPT + REACT</a>
          <span>Multiple Modules | Not available until May 20 at 12:00am | Due May 27 at 11:59pm | 100 pts</span>
        </li>
      </ul>
      <Routes>
        <Route path=":id" element={<AssignmentEditor />} />
      </Routes>
    </div>
  );
}
