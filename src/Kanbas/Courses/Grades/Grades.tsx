import React from 'react';
import { useParams } from 'react-router';
import { users, assignments, enrollments, grades } from '../../Database';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFilter, FaFileImport, FaFileExport, FaCog } from 'react-icons/fa';
import './Grades.css';

const Grades = () => {
  const { cid } = useParams();

  // Get enrolled students for the current course
  const enrolledStudents = enrollments
    .filter(enrollment => enrollment.course === cid)
    .map(enrollment => users.find(user => user._id === enrollment.user));

  // Get assignments for the current course
  const courseAssignments = assignments.filter(assignment => assignment.course === cid);

  return (
    <div className="container mt-5" id="wd-grades">
      <div className="d-flex justify-content-between mb-3 align-items-center">
        <h2 className="text-dark">Grades</h2>
        <div>
          <button className="btn btn-primary me-2">
            <FaFileImport /> Import
          </button>
          <div className="btn-group">
            <button className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
              <FaFileExport /> Export
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Option 1</a></li>
              <li><a className="dropdown-item" href="#">Option 2</a></li>
            </ul>
          </div>
          <button className="btn btn-secondary ms-2">
            <FaCog />
          </button>
        </div>
      </div>
      <button className="btn btn-secondary mb-3">
        <FaFilter /> Apply Filters
      </button>
      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Student Name</th>
              {courseAssignments.map(assignment => (
                <th key={assignment._id}>{assignment.title}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {enrolledStudents.map(student => (
              <tr key={student?._id}>
                <td className="text-danger">{student?.firstName} {student?.lastName}</td>
                {courseAssignments.map(assignment => {
                  const grade = grades.find(
                    grade => grade.student === student?._id && grade.assignment === assignment._id
                  );
                  return (
                    <td key={assignment._id}>
                      {grade ? `${grade.grade}%` : 'N/A'}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Grades;
