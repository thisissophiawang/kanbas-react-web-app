import React from 'react';
import './Grades.css';  // Import the CSS file for styling

const Grades = () => {
  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between mb-3">
        <h2>Grades</h2>
        <div>
          <button className="btn btn-primary me-2">
            <i className="bi bi-file-earmark-arrow-up"></i> Import
          </button>
          <div className="btn-group">
            <button className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
              <i className="bi bi-file-earmark-arrow-down"></i> Export
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Option 1</a></li>
              <li><a className="dropdown-item" href="#">Option 2</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="table-responsive">
        <table className="table table-striped">
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
              <td>Jane Adams</td>
              <td>100%</td>
              <td>96.67%</td>
              <td>92.18%</td>
              <td>66.22%</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Grades;
