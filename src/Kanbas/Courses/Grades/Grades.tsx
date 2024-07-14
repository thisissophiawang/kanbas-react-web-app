// src/Kanbas/Courses/Grades/Grades.tsx
import React from 'react';
import './Grades.css'; // Import the CSS file for styling
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Dropdown, Table, InputGroup, FormControl } from 'react-bootstrap';
import { DropdownButton } from 'react-bootstrap';

const Grades = () => {
  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between mb-3">
        <div className="d-flex">
          <InputGroup className="me-2">
            <InputGroup.Text>Student Names</InputGroup.Text>
            <FormControl placeholder="Search Students" />
          </InputGroup>
          <InputGroup className="me-2">
            <InputGroup.Text>Assignment Names</InputGroup.Text>
            <FormControl placeholder="Search Assignments" />
          </InputGroup>
          <Button variant="primary" className="me-2">
            <i className="bi bi-filter"></i> Apply Filters
          </Button>
        </div>
        <div>
          <Button className="btn btn-primary me-2">
            <i className="bi bi-file-earmark-arrow-up"></i> Import
          </Button>
          <DropdownButton className="btn-group" title="Export" variant="secondary" id="dropdown-basic-button">
            <Dropdown.Item href="#">Export as CSV</Dropdown.Item>
            <Dropdown.Item href="#">Export as PDF</Dropdown.Item>
          </DropdownButton>
        </div>
      </div>
      <div className="table-responsive">
        <Table striped bordered hover>
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
        </Table>
      </div>
    </div>
  );
};

export default Grades;
