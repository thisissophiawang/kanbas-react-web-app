// src/Kanbas/Courses/Assignments/Editor.tsx
import React from 'react';

export default function AssignmentEditor() {
  return (
    <div id="wd-assignment-editor">
      <h2 id="wd-assignment-name">Assignment Name</h2>
      <input id="wd-assignment-name-input" type="text" value="A1 - ENV + HTML" />

      <label htmlFor="wd-assignment-points">Points</label>
      <input id="wd-assignment-points" type="number" value="100" />

      <label htmlFor="wd-assignment-group">Assignment Group</label>
      <select id="wd-assignment-group">
        <option>ASSIGNMENTS</option>
        <option>QUIZZES</option>
      </select>

      <label htmlFor="wd-display-grade-as">Display Grade As</label>
      <select id="wd-display-grade-as">
        <option>Percentage</option>
        <option>Complete/Incomplete</option>
      </select>

      <label htmlFor="wd-submission-type">Submission Type</label>
      <select id="wd-submission-type">
        <option>Online</option>
        <option>On Paper</option>
      </select>

      <div id="wd-online-entry-options">
        <label>
          <input type="checkbox" /> Text Entry
        </label>
        <label>
          <input type="checkbox" /> Website URL
        </label>
        <label>
          <input type="checkbox" /> Media Recordings
        </label>
        <label>
          <input type="checkbox" /> Student Annotation
        </label>
        <label>
          <input type="checkbox" /> File Uploads
        </label>
      </div>

      <label htmlFor="wd-assign-to">Assign To</label>
      <select id="wd-assign-to">
        <option>Everyone</option>
      </select>

      <label htmlFor="wd-due-date">Due</label>
      <input id="wd-due-date" type="date" value="2024-05-13" />

      <label htmlFor="wd-available-from">Available From</label>
      <input id="wd-available-from" type="date" value="2024-05-06" />

      <label htmlFor="wd-available-to">Until</label>
      <input id="wd-available-to" type="date" value="2024-05-20" />

      <button id="wd-save-assignment">Save</button>
      <button id="wd-cancel-assignment">Cancel</button>
    </div>
  );
}
