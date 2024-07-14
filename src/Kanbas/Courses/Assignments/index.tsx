import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import AssignmentEditor from './Editor';
import { FaSearch, FaPlus, FaCheckCircle, FaEllipsisV, FaPen } from 'react-icons/fa';
import './Assignments.css';

export default function Assignments() {
  return (
    <div id="wd-assignments">
      <div className="wd-assignments-header">
        <div className="wd-search-container">
          <FaSearch className="wd-search-icon" />
          <input id="wd-search-assignment" placeholder="Search for Assignments" />
        </div>
        <button id="wd-add-assignment-group" className="btn btn-secondary">+ Group</button>
        <button id="wd-add-assignment" className="btn btn-danger">+ Assignment</button>
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
        <li className="wd-assignment-list-item">
          <div className="wd-assignment-item-header">
            <FaPen className="wd-pen-icon" />
            <Link className="wd-assignment-link" to="123">
              A1
            </Link>
            <FaCheckCircle className="wd-check-icon" />
            <FaEllipsisV className="wd-ellipsis-icon" />
          </div>
          <div className="wd-assignment-item-details">
            <span className="wd-multiple-modules">Multiple Modules</span> | Not available until May 6 at 12:00am |
            <br />
            Due May 13 at 11:59pm | 100 pts
          </div>
        </li>
        <li className="wd-assignment-list-item">
          <div className="wd-assignment-item-header">
            <FaPen className="wd-pen-icon" />
            <Link className="wd-assignment-link" to="124">
              A2
            </Link>
            <FaCheckCircle className="wd-check-icon" />
            <FaEllipsisV className="wd-ellipsis-icon" />
          </div>
          <div className="wd-assignment-item-details">
            <span className="wd-multiple-modules">Multiple Modules</span> | Not available until May 13 at 12:00am |
            <br />
            Due May 20 at 11:59pm | 100 pts
          </div>
        </li>
        <li className="wd-assignment-list-item">
          <div className="wd-assignment-item-header">
            <FaPen className="wd-pen-icon" />
            <Link className="wd-assignment-link" to="125">
              A3
            </Link>
            <FaCheckCircle className="wd-check-icon" />
            <FaEllipsisV className="wd-ellipsis-icon" />
          </div>
          <div className="wd-assignment-item-details">
            <span className="wd-multiple-modules">Multiple Modules</span> | Not available until May 20 at 12:00am |
            <br />
            Due May 27 at 11:59pm | 100 pts
          </div>
        </li>
      </ul>

      <Routes>
        <Route path=":id" element={<AssignmentEditor />} />
      </Routes>
    </div>
  );
}
