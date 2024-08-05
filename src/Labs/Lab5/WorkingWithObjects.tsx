import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  });

  const [module, setModule] = useState({
    id: 101,
    name: "Web Development",
    description: "Learning to build web applications using modern frameworks",
    course: "CS50",
  });

  const ASSIGNMENT_URL = "http://localhost:4000/a5/assignment";
  const MODULE_URL = "http://localhost:4000/lab5/module";

  return (
    <div className="container mt-3">
      <h3>Working With Objects</h3>
      <div className="text-start">
        <h4>Retrieving Objects</h4>
        <div className="d-flex flex-column align-items-start">
          <a className="btn btn-primary mb-2" href={`${ASSIGNMENT_URL}`}>
            Get Assignment
          </a>
          <a className="btn btn-primary mb-2" href={`${ASSIGNMENT_URL}/title`}>
            Get Title
          </a>
          <a className="btn btn-primary mb-2" href={`${MODULE_URL}`}>
            Get Module
          </a>
          <a className="btn btn-primary mb-2" href={`${MODULE_URL}/name`}>
            Get Module Name
          </a>
        </div>
        <h4>Modifying Properties</h4>
        <div className="d-flex flex-column align-items-start">
          <a className="btn btn-primary mb-2" href={`${ASSIGNMENT_URL}/title/${assignment.title}`}>
            Update Title
          </a>
          <input
            className="form-control mt-2"
            type="text"
            onChange={(e) =>
              setAssignment({ ...assignment, title: e.target.value })
            }
            value={assignment.title}
            placeholder="Enter new title"
          />
          <input
            className="form-control mt-2"
            type="number"
            onChange={(e) =>
              setAssignment({ ...assignment, score: parseInt(e.target.value) })
            }
            value={assignment.score}
            placeholder="Enter new score"
          />
          <div className="form-check mt-2">
            <input
              className="form-check-input"
              type="checkbox"
              onChange={(e) =>
                setAssignment({ ...assignment, completed: e.target.checked })
              }
              checked={assignment.completed}
            />
            <label className="form-check-label">
              Completed
            </label>
          </div>
          <a className="btn btn-primary mb-2" href={`${MODULE_URL}/update/${module.name}`}>
            Update Module Name
          </a>
          <input
            className="form-control mt-2"
            type="text"
            onChange={(e) =>
              setModule({ ...module, name: e.target.value })
            }
            value={module.name}
            placeholder="Enter new module name"
          />
        </div>
      </div>
    </div>
  );
}

export default WorkingWithObjects;
