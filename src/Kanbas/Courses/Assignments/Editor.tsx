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
    <div id="wd-assignments-editor">
      <div className="form-group">
        <label htmlFor="wd-name">Assignment Name</label>
        <input 
          id="wd-name" 
          className="form-control"
          value={assignmentName} 
          onChange={(e) => setAssignmentName(e.target.value)} 
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="wd-description">Description</label>
        <textarea 
          id="wd-description" 
          className="form-control"
          rows={5} 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
        />
      </div>

      <div className="form-group">
        <label htmlFor="wd-points">Points</label>
        <input 
          id="wd-points" 
          className="form-control"
          type="number" 
          value={points} 
          onChange={(e) => setPoints(Number(e.target.value))} 
        />
      </div>

      <div className="form-group">
        <label htmlFor="wd-group">Assignment Group</label>
        <select 
          id="wd-group" 
          className="form-control"
          value={group} 
          onChange={(e) => setGroup(e.target.value)}
        >
          <option value="ASSIGNMENTS">ASSIGNMENTS</option>
          {/* Add other options as needed */}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="wd-display-grade-as">Display Grade as</label>
        <select 
          id="wd-display-grade-as" 
          className="form-control"
          value={displayGradeAs} 
          onChange={(e) => setDisplayGradeAs(e.target.value)}
        >
          <option value="Percentage">Percentage</option>
          {/* Add other options as needed */}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="wd-submission-type">Submission Type</label>
        <div id="wd-entry-options" className="form-control">
          <select 
            id="wd-submission-type" 
            className="form-control"
            value={submissionType} 
            onChange={(e) => setSubmissionType(e.target.value)}
          >
            <option value="Online">Online</option>
            {/* Add other options as needed */}
          </select>
          <label><strong>Online Entry Options</strong></label>
          <div>
            <label>
              <input id="wd-text-entry" type="checkbox" /> Text Entry
            </label>
            <label>
              <input id="wd-website-url" type="checkbox" /> Website URL
            </label>
            <label>
              <input id="wd-media-recordings" type="checkbox" /> Media Recordings
            </label>
            <label>
              <input id="wd-student-annotation" type="checkbox" /> Student Annotation
            </label>
            <label>
              <input id="wd-file-upload" type="checkbox" /> File Uploads
            </label>
          </div>
        </div>
      </div>

      <div className="form-group" id="wd-assign">
        <label htmlFor="wd-assign-to">Assign to</label>
        <input 
          id="wd-assign-to" 
          className="form-control"
          value={assignTo} 
          onChange={(e) => setAssignTo(e.target.value)} 
        />
        <label htmlFor="wd-due-date">Due</label>
        <input 
          id="wd-due-date" 
          className="form-control"
          type="date" 
          value={dueDate} 
          onChange={(e) => setDueDate(e.target.value)} 
        />
        <div className="d-flex">
          <div className="flex-grow-1 me-2">
            <label htmlFor="wd-available-from">Available from</label>
            <input 
              id="wd-available-from" 
              className="form-control"
              type="date" 
              value={availableFrom} 
              onChange={(e) => setAvailableFrom(e.target.value)} 
            />
          </div>
          <div className="flex-grow-1">
            <label htmlFor="wd-available-until">Until</label>
            <input 
              id="wd-available-until" 
              className="form-control"
              type="date" 
              value={availableUntil} 
              onChange={(e) => setAvailableUntil(e.target.value)} 
            />
          </div>
        </div>
      </div>

      <div className="form-group btn-container">
  <button className="btn btn-secondary">Cancel</button>
  <button className="btn btn-danger">Save</button>
</div>

    </div>
  );
}
