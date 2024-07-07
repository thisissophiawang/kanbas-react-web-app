import React, { useState } from 'react';

export default function AssignmentEditor() {
  const [assignmentName, setAssignmentName] = useState<string>("A1 - ENV + HTML");
  const [description, setDescription] = useState<string>("The assignment is available online. Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following: Your full name and section Links to each of the lab assignments Link to the Kanbas application Links to all relevant source code repositories The Kanbas application should include a link to navigate back to the landing page.");
  const [points, setPoints] = useState<number>(100);
  const [group, setGroup] = useState<string>("ASSIGNMENTS");
  const [displayGradeAs, setDisplayGradeAs] = useState<string>("Percentage");
  const [submissionType, setSubmissionType] = useState<string>("Online");
  const [assignTo, setAssignTo] = useState<string>("Everyone");
  const [dueDate, setDueDate] = useState<string>("2024-05-13");
  const [availableFrom, setAvailableFrom] = useState<string>("2024-05-06");
  const [availableUntil, setAvailableUntil] = useState<string>("2024-05-20");

  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input 
        id="wd-name" 
        value={assignmentName} 
        onChange={(e) => setAssignmentName(e.target.value)} 
      /><br /><br />

      <textarea 
        id="wd-description" 
        rows={5} 
        cols={33} 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
      />
      <br /><br />

      <table>
        <tbody>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input 
                id="wd-points" 
                type="number" 
                value={points} 
                onChange={(e) => setPoints(Number(e.target.value))} 
              />
            </td>
          </tr>
          <tr><td colSpan={2}><br /></td></tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
              <select 
                id="wd-group" 
                value={group} 
                onChange={(e) => setGroup(e.target.value)}
              >
                <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                {/* Add other options as needed */}
              </select>
            </td>
          </tr>
          <tr><td colSpan={2}><br /></td></tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td>
              <select 
                id="wd-display-grade-as" 
                value={displayGradeAs} 
                onChange={(e) => setDisplayGradeAs(e.target.value)}
              >
                <option value="Percentage">Percentage</option>
                {/* Add other options as needed */}
              </select>
            </td>
          </tr>
          <tr><td colSpan={2}><br /></td></tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
              <select 
                id="wd-submission-type" 
                value={submissionType} 
                onChange={(e) => setSubmissionType(e.target.value)}
              >
                <option value="Online">Online</option>
                {/* Add other options as needed */}
              </select>
              <br /><br />
              <label htmlFor="wd-text-entry">
                <input id="wd-text-entry" type="checkbox" /> Text Entry
              </label>
              <br />
              <label htmlFor="wd-website-url">
                <input id="wd-website-url" type="checkbox" /> Website URL
              </label>
              <br />
              <label htmlFor="wd-media-recordings">
                <input id="wd-media-recordings" type="checkbox" /> Media Recordings
              </label>
              <br />
              <label htmlFor="wd-student-annotation">
                <input id="wd-student-annotation" type="checkbox" /> Student Annotation
              </label>
              <br />
              <label htmlFor="wd-file-upload">
                <input id="wd-file-upload" type="checkbox" /> File Uploads
              </label>
            </td>
          </tr>
          <tr><td colSpan={2}><br /></td></tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-assign-to">Assign to</label>
            </td>
            <td>
              <input 
                id="wd-assign-to" 
                value={assignTo} 
                onChange={(e) => setAssignTo(e.target.value)} 
              />
            </td>
          </tr>
          <tr><td colSpan={2}><br /></td></tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-due-date">Due</label>
            </td>
            <td>
              <input 
                id="wd-due-date" 
                type="date" 
                value={dueDate} 
                onChange={(e) => setDueDate(e.target.value)} 
              />
            </td>
          </tr>
          <tr><td colSpan={2}><br /></td></tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-available-from">Available from</label>
            </td>
            <td>
              <input 
                id="wd-available-from" 
                type="date" 
                value={availableFrom} 
                onChange={(e) => setAvailableFrom(e.target.value)} 
              />
            </td>
          </tr>
          <tr><td colSpan={2}><br /></td></tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-available-until">Until</label>
            </td>
            <td>
              <input 
                id="wd-available-until" 
                type="date" 
                value={availableUntil} 
                onChange={(e) => setAvailableUntil(e.target.value)} 
              />
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      <button>Cancel</button>
      <button>Save</button>
    </div>
  );
}

