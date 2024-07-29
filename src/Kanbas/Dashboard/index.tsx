import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { courses as dbCourses } from '../Database'; 

interface Course {
  _id: string;
  name: string;
  number: string;
  startDate: string;
  endDate: string;
  department: string;
  credits: number;
  description: string;
  image?: string;
}

export default function Dashboard() {
  const [courses, setCourses] = useState<Course[]>(dbCourses); 
  const [course, setCourse] = useState<Course>({
    _id: "0",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    image: "reactjs.jpg",
    description: "New Description",
    department: "New Department",
    credits: 3,
  }); 

  const addNewCourse = () => {
    const newCourse = { ...course, _id: new Date().getTime().toString(), image: "reactjs.jpg" };
    setCourses([...courses, newCourse]);
  };

  const deleteCourse = (courseId: string) => {
    setCourses(courses.filter((course) => course._id !== courseId));
  };

  const editCourse = (course: Course) => {
    setCourse(course);
  };

  const updateCourse = () => {
    setCourses(courses.map((c) => (c._id === course._id ? course : c)));
    setCourse({
      _id: "0",
      name: "New Course",
      number: "New Number",
      startDate: "2023-09-10",
      endDate: "2023-12-15",
      image: "reactjs.jpg",
      description: "New Description",
      department: "New Department",
      credits: 3,
    });
  };

  return (
    <div id="wd-dashboard" className="p-4">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
      <hr />
      <div className="d-flex justify-content-between align-items-center">
        <h5>New Course</h5>
        <div>
          <button
            className="btn btn-warning me-2"
            id="wd-update-course-click"
            onClick={updateCourse}
          >
            Update
          </button>
          <button
            className="btn btn-primary"
            id="wd-add-new-course-click"
            onClick={addNewCourse}
          >
            Add
          </button>
        </div>
      </div>
      <input
        value={course.name}
        className="form-control mb-2"
        onChange={(e) => setCourse({ ...course, name: e.target.value })}
      />
      <textarea
        value={course.description}
        className="form-control mb-2"
        onChange={(e) => setCourse({ ...course, description: e.target.value })}
      />
      <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course) => (
            <div key={course._id} className="wd-dashboard-course col" style={{ width: "300px" }}>
              <div className="card new-card">
                <Link className="wd-dashboard-course-link text-decoration-none text-dark" to={`/Kanbas/Courses/${course._id}/Home`}>
                  <img src={`/images/${course.image}`} width="100%" alt={course.name} onError={(e) => e.currentTarget.src = '/images/default.jpg'} />
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title mt-2">{course.name}</h5>
                    <p className="card-text">{course.description}</p>
                    <div className="d-flex justify-content-between mt-2">
                      <Link className="btn btn-primary" to={`/Kanbas/Courses/${course._id}/Home`}>
                        Go
                      </Link>
                      <div>
                        <button
                          className="btn btn-warning me-2"
                          onClick={(event) => {
                            event.preventDefault();
                            editCourse(course);
                          }}
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-danger"
                          onClick={(event) => {
                            event.preventDefault();
                            deleteCourse(course._id);
                          }}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
