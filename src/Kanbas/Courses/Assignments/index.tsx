//Users/sophiawang/2024/summer/webdev/kanbas-react-web-app/src/Kanbas/Courses/Assignments/index.tsx
//index file for Assignments component
//This component is a container for AssignmentEditor component
import React, { useEffect } from 'react';
import { useParams, Link, Routes, Route, useNavigate } from 'react-router-dom';
import AssignmentEditor from './Editor';
import { FaSearch, FaPlus, FaCheckCircle, FaEllipsisV, FaPen, FaTrash } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import './Assignments.css';
import { addAssignment, deleteAssignment, updateAssignment, setAssignments } from "./reducer";
import * as client from "./client";

export default function Assignments() {
  const dispatch = useDispatch();
  const { cid } = useParams<{ cid: string }>();
  // const assignments = useSelector((state: any) => state.assignments.assignments.filter((assignment: any) => assignment.course === cid));
  const assignments = useSelector((state: any) => state.assignmentsReducer.assignments);
  const navigate = useNavigate();

  // Fetch assignments
  const fetchAssignments = async () => {
    const assignments = await client.findAssignmentsForCourse(cid as string);
    dispatch(setAssignments(assignments));
  };

  useEffect(() => {
    fetchAssignments();
  }, [cid]);

  // Create assignment
  const createAssignment = async () => {
    const assignment = {
      title: "New Assignment",
      course: cid,
    };
    const newAssignment = await client.createAssignment(cid as string, assignment);
    dispatch(addAssignment(newAssignment));
    navigate(newAssignment._id);
  };

  // Delete assignment
  const DeleteAssignment = async (assignmentId: string) => {
    await client.deleteAssignment(assignmentId);
    dispatch(deleteAssignment(assignmentId));
  };

  // Update assignment
  const handleUpdateAssignment = async (assignment: any) => {
    await client.updateAssignment(assignment);
    dispatch(updateAssignment(assignment));
  };

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
        {assignments.filter((a: any) => a.course === cid).map((assignment: any) => (
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
                    DeleteAssignment(assignment._id);
                  }
                }} 
              />
            </div>
            <div className="wd-assignment-item-details">
              <span className="wd-multiple-modules">Multiple Modules</span> | Not available until {assignment.availableFrom} at {assignment.availableUntil} |
              <br />
              Due {assignment.dueDate} at 11:59pm | {assignment.points} pts
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
