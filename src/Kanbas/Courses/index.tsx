import React from 'react';
import { Navigate, Route, Routes, useParams, useLocation } from 'react-router';
import CoursesNavigation from './Navigation';
import Modules from './Modules';
import Home from './Home';
import Assignments from './Assignments';
import AssignmentEditor from './Assignments/Editor';
import Grades from './Grades/Grades';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaAlignJustify } from 'react-icons/fa';
import KanbasNavigation from '../Navigation';

type Breadcrumbs = {
  Home: string;
  Modules: string;
  Piazza: string;
  Zoom: string;
  Assignments: string;
  Quizzes: string;
  Grades: string;
};

const breadcrumbs: Breadcrumbs = {
  Home: "Home",
  Modules: "Modules",
  Piazza: "Piazza",
  Zoom: "Zoom",
  Assignments: "Assignments",
  Quizzes: "Quizzes",
  Grades: "Grades",
};

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

interface CoursesProps {
  courses: Course[];
}

export default function Courses({ courses }: CoursesProps) {
  const { cid } = useParams<{ cid: string }>();
  const course = courses.find((course) => course._id === cid);
  const { pathname } = useLocation();
  
  const currentPath = pathname.split("/")[4] as keyof Breadcrumbs;

  return (
    <div id="wd-kanbas" className="d-flex">
      <KanbasNavigation />
      <CoursesNavigation />
      <div className="content p-3 flex-grow-1" style={{ marginLeft: '260px' }}>
        <h2 className="text-danger">
          <FaAlignJustify className="me-3 fs-4 mb-1" />
          {course?.name} &gt; {breadcrumbs[currentPath]}
        </h2>
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
