import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';

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

interface DashboardProps {
  courses: Course[];
  course: Course;
  setCourse: (course: Course) => void;
  addNewCourse: () => void;
  deleteCourse: (courseId: string) => void;
  updateCourse: () => void;
}

export default function Dashboard({ courses, course, setCourse, addNewCourse, deleteCourse, updateCourse }: DashboardProps) {
  //implement the logic to get the current user
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  return (
    <div id="wd-dashboard" className="p-4">
      <h1 id="wd-dashboard-title">
        Dashboard{currentUser && <>({currentUser.username})</>}
        </h1>
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
                  <img 
                    src={`/images/${course.image || 'reactjs.jpg'}`} 
                    width="100%" 
                    alt={course.name} 
                    onError={(e) => e.currentTarget.src = '/images/reactjs.jpg'} 
                  />
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
                            setCourse(course);
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