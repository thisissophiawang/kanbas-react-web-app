import React from 'react';
import { Routes, Route, useParams, Navigate } from "react-router";
import CoursesNavigation from "../Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Grades from "./Grades/Grades";
import 'bootstrap/dist/css/bootstrap.min.css';
import { courses } from "../Database";

export default function Courses() {
  const { cid } = useParams();
  const course = courses.find((course: { _id: string }) => course._id === cid);

  return (
    <div id="wd-kanbas" className="h-100">
      <div className="sidebar">
        <CoursesNavigation />
      </div>
      <div className="content">
        <Routes>
          <Route path="/" element={<Navigate to="Home" />} />
          <Route path="Home" element={<Home />} />
          <Route path="Modules" element={<Modules />} />
          <Route path="Piazza" element={<h1>Piazza</h1>} />
          <Route path="Zoom" element={<h1>Zoom</h1>} />
          <Route path="Assignments" element={<Assignments />} />
          <Route path="Assignments/:id" element={<AssignmentEditor />} />
          <Route path="Quizzes" element={<h1>Quizzes</h1>} />
          <Route path="Grades" element={<Grades />} />
        </Routes>
      </div>
    </div>
  );
}
