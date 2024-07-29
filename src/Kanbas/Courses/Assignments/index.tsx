// src/Kanbas/Courses/Assignments/index.tsx
import React from 'react';
import { useParams, Link, Routes, Route, useNavigate } from 'react-router-dom';
import AssignmentEditor from './Editor';
import { FaSearch, FaPlus, FaCheckCircle, FaEllipsisV, FaPen, FaTrash } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAssignment } from './reducer';
import './Assignments.css';

export default function Assignments() {
  const { cid } = useParams<{ cid: string }>(); // Get the current course ID
  const assignments = useSelector((state: any) => state.assignments.assignments.filter((assignment: any) => assignment.course === cid)); // Filter assignments by course ID
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Hook to navigate programmatically

  return (
    <div id="wd-assignments">
      <div className="wd-assignments-header">
        <div className="wd-search-container">
          <FaSearch className="wd-search-icon" />
          <input id="wd-search-assignment" placeholder="Search for Assignments" />
        </div>
        <button id="wd-add-assignment-group" className="btn btn-secondary">+ Group</button>
        <button id="wd-add-assignment" className="btn btn-danger" onClick={() => navigate('new')}>
          + Assignment
        </button>
      </div>
      <div id="wd-assignments-title" className="wd-assignment-title-container">
        <div className="wd-assignment-title-left">
          <FaEllipsisV className="wd-drag-icon" />
          <span className="wd-assignment-title-text">ASSIGNMENTS</span>
        </div>
        <div className="wd-assignment-title-right">
          <span className="wd-assignment-percentage">40% of Total</span>
          <FaPlus className="wd-add-icon" />
          <FaEllipsisV className="wd-more-icon" />
        </div>
      </div>
      <ul id="wd-assignment-list">
        {assignments.map((assignment: any) => (
          <li key={assignment._id} className="wd-assignment-list-item">
            <div className="wd-assignment-item-header">
              <FaPen className="wd-pen-icon" />
              <Link className="wd-assignment-link" to={assignment._id}>
                {assignment.title}
              </Link>
              <FaCheckCircle className="wd-check-icon" />
              <FaTrash 
                className="wd-trash-icon" 
                onClick={() => {
                  if (window.confirm("Are you sure you want to delete this assignment?")) {
                    dispatch(deleteAssignment(assignment._id));
                  }
                }} 
              />
            </div>
            <div className="wd-assignment-item-details">
              <span className="wd-multiple-modules">Multiple Modules</span> | Not available until May 6 at 12:00am |
              <br />
              Due May 13 at 11:59pm | 100 pts
            </div>
          </li>
        ))}
      </ul>

      <Routes>
        <Route path=":id" element={<AssignmentEditor />} />
        <Route path="new" element={<AssignmentEditor />} />
      </Routes>
    </div>
  );
}
