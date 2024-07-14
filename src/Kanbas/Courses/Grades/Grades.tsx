import React from 'react';
import './Grades.css'; // Import the CSS file for styling
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFilter, FaFileImport, FaFileExport, FaCog } from 'react-icons/fa';

const Grades = () => {
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
      <div className="d-flex justify-content-between mb-3">
        <div className="d-flex flex-grow-1 me-2">
          <div className="me-2 flex-fill">
            <label className="text-dark font-weight-bold">Student Names</label>
            <input type="text" className="form-control" placeholder="Search Students" />
          </div>
          <div className="me-2 flex-fill">
            <label className="text-dark font-weight-bold">Assignment Names</label>
            <input type="text" className="form-control" placeholder="Search Assignments" />
          </div>
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
              <th>A1 SETUP</th>
              <th>A2 HTML</th>
              <th>A3 CSS</th>
              <th>A4 BOOTSTRAP</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-danger">Jane Adams</td>
              <td>100%</td>
              <td>96.67%</td>
              <td>92.18%</td>
              <td>66.22%</td>
            </tr>
            <tr>
              <td className="text-danger">Han Bao</td>
              <td>100%</td>
              <td>100%</td>
              <td><input type="text" className="form-control" value="88.03%" /></td>
              <td>98.99%</td>
            </tr>
            <tr>
              <td className="text-danger">Mahi Sai Srinivas Bobbili</td>
              <td>100%</td>
              <td>96.67%</td>
              <td>98.37%</td>
              <td>100%</td>
            </tr>
            <tr>
              <td className="text-danger">Siran Cao</td>
              <td>100%</td>
              <td>100%</td>
              <td>100%</td>
              <td>100%</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Grades;
