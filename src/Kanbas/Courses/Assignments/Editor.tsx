import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './Assignments.css';

export default function AssignmentEditor() {
  const { assignmentId } = useParams();
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
    <div id="wd-assignments-editor" className="container">
      <label htmlFor="wd-name" className="form-label">Assignment Name</label>
      <input 
        id="wd-name" 
        value={assignmentName} 
        onChange={(e) => setAssignmentName(e.target.value)} 
        className="form-control"
      />
      <br />

      <textarea 
        id="wd-description" 
        rows={5} 
        cols={33} 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
        className="form-control"
      />
      <br />

      <div className="row">
        <div className="col">
          <label htmlFor="wd-points" className="form-label">Points</label>
          <input 
            id="wd-points" 
            type="number" 
            value={points} 
            onChange={(e) => setPoints(Number(e.target.value))} 
            className="form-control"
          />
        </div>
        <div className="col">
          <label htmlFor="wd-group" className="form-label">Assignment Group</label>
          <select 
            id="wd-group" 
            value={group} 
            onChange={(e) => setGroup(e.target.value)}
            className="form-control"
          >
            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
          </select>
        </div>
      </div>
      <br />

      <div className="row">
        <div className="col">
          <label htmlFor="wd-display-grade-as" className="form-label">Display Grade as</label>
          <select 
            id="wd-display-grade-as" 
            value={displayGradeAs} 
            onChange={(e) => setDisplayGradeAs(e.target.value)}
            className="form-control"
          >
            <option value="Percentage">Percentage</option>
          </select>
        </div>
        <div className="col">
          <label htmlFor="wd-submission-type" className="form-label">Submission Type</label>
          <select 
            id="wd-submission-type" 
            value={submissionType} 
            onChange={(e) => setSubmissionType(e.target.value)}
            className="form-control"
          >
            <option value="Online">Online</option>
          </select>
          <br />
          <div className="form-check">
            <input id="wd-text-entry" type="checkbox" className="form-check-input" /> 
            <label htmlFor="wd-text-entry" className="form-check-label">Text Entry</label>
          </div>
          <div className="form-check">
            <input id="wd-website-url" type="checkbox" className="form-check-input" /> 
            <label htmlFor="wd-website-url" className="form-check-label">Website URL</label>
          </div>
          <div className="form-check">
            <input id="wd-media-recordings" type="checkbox" className="form-check-input" /> 
            <label htmlFor="wd-media-recordings" className="form-check-label">Media Recordings</label>
          </div>
          <div className="form-check">
            <input id="wd-student-annotation" type="checkbox" className="form-check-input" /> 
            <label htmlFor="wd-student-annotation" className="form-check-label">Student Annotation</label>
          </div>
          <div className="form-check">
            <input id="wd-file-upload" type="checkbox" className="form-check-input" /> 
            <label htmlFor="wd-file-upload" className="form-check-label">File Uploads</label>
          </div>
        </div>
      </div>
      <br />

      <div className="row">
        <div className="col">
          <label htmlFor="wd-assign-to" className="form-label">Assign to</label>
          <input 
            id="wd-assign-to" 
            value={assignTo} 
            onChange={(e) => setAssignTo(e.target.value)} 
            className="form-control"
          />
        </div>
        <div className="col">
          <label htmlFor="wd-due-date" className="form-label">Due</label>
          <input 
            id="wd-due-date" 
            type="date" 
            value={dueDate} 
            onChange={(e) => setDueDate(e.target.value)} 
            className="form-control"
          />
        </div>
      </div>
      <br />

      <div className="row">
        <div className="col">
          <label htmlFor="wd-available-from" className="form-label">Available from</label>
          <input 
            id="wd-available-from" 
            type="date" 
            value={availableFrom} 
            onChange={(e) => setAvailableFrom(e.target.value)} 
            className="form-control"
          />
        </div>
        <div className="col">
          <label htmlFor="wd-available-until" className="form-label">Until</label>
          <input 
            id="wd-available-until" 
            type="date" 
            value={availableUntil} 
            onChange={(e) => setAvailableUntil(e.target.value)} 
            className="form-control"
          />
        </div>
      </div>
      <br />

      <div className="float-end">
        <button className="btn btn-secondary me-2">Cancel</button>
        <button className="btn btn-success">Save</button>
      </div>
    </div>
  );
}
