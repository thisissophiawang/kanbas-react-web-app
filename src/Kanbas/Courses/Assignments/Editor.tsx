// src/Kanbas/Courses/Assignments/Editor.tsx
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { assignments } from '../../Database'; // import assignments data
import './Assignments.css';

export default function AssignmentEditor() {
  const { id } = useParams();
  const [assignment, setAssignment] = useState<any>(null);

  useEffect(() => {
    const foundAssignment = assignments.find((a: any) => a._id === id);
    setAssignment(foundAssignment);
  }, [id]);

  if (!assignment) {
    return <div>Loading...</div>;
  }

  return (
    <div id="wd-assignments-editor">
      <div className="form-group">
        <label htmlFor="wd-name">Assignment Name</label>
        <input 
          id="wd-name" 
          className="form-control"
          value={assignment.title} 
          onChange={(e) => setAssignment({ ...assignment, title: e.target.value })} 
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="wd-description">Description</label>
        <textarea 
          id="wd-description" 
          className="form-control"
          rows={5} 
          value={assignment.description} 
          onChange={(e) => setAssignment({ ...assignment, description: e.target.value })} 
        />
      </div>

      <div className="form-group">
        <label htmlFor="wd-points">Points</label>
        <input 
          id="wd-points" 
          className="form-control"
          type="number" 
          value={assignment.points} 
          onChange={(e) => setAssignment({ ...assignment, points: Number(e.target.value) })} 
        />
      </div>

      <div className="form-group" id="wd-assign">
        <label htmlFor="wd-assign-to">Assign to</label>
        <input 
          id="wd-assign-to" 
          className="form-control"
          value={assignment.assignTo} 
          onChange={(e) => setAssignment({ ...assignment, assignTo: e.target.value })} 
        />
        <label htmlFor="wd-due-date">Due</label>
        <input 
          id="wd-due-date" 
          className="form-control"
          type="date" 
          value={assignment.dueDate} 
          onChange={(e) => setAssignment({ ...assignment, dueDate: e.target.value })} 
        />
        <div className="d-flex">
          <div className="flex-grow-1 me-2">
            <label htmlFor="wd-available-from">Available from</label>
            <input 
              id="wd-available-from" 
              className="form-control"
              type="date" 
              value={assignment.availableFrom} 
              onChange={(e) => setAssignment({ ...assignment, availableFrom: e.target.value })} 
            />
          </div>
          <div className="flex-grow-1">
            <label htmlFor="wd-available-until">Until</label>
            <input 
              id="wd-available-until" 
              className="form-control"
              type="date" 
              value={assignment.availableUntil} 
              onChange={(e) => setAssignment({ ...assignment, availableUntil: e.target.value })} 
            />
          </div>
        </div>
      </div>

      <div className="form-group btn-container">
        <Link to={`/Kanbas/Courses/${assignment.course}/Assignments`} className="btn btn-secondary">Cancel</Link>
        <button className="btn btn-danger">Save</button>
      </div>
    </div>
  );
}
