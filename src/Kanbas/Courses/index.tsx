//Users/sophiawang/2024/summer/webdev/kanbas-react-web-app/src/Kanbas/Courses/index.tsx
import React from "react";
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
import PeopleTable from './People/Table';
import Quizzes from './Quizzes'; //new import from './Quizzes'
import QuizEditor from './Quizzes/Editor'; //new import from './Quizzes/Editor'
import { useSelector } from 'react-redux';

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

export default function Courses() {
  const { cid } = useParams<{ cid: string }>();
  const { pathname } = useLocation();
  const courses = useSelector((state: any) => state.coursesReducer ? state.coursesReducer.courses : []);
  const course = courses.find((c: any) => c._id === cid);

  const currentPath = pathname.split("/")[4] as keyof Breadcrumbs;

  return (
    <div id="wd-kanbas" className="d-flex">
      <KanbasNavigation />
      <CoursesNavigation courses={courses}/>
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
          <Route path="Grades" element={<Grades />} />
          <Route path="People" element={<PeopleTable />} />
          <Route path="People/:uid" element={<PeopleTable />} />
          <Route path="Quizzes/*" element={<Quizzes />} /> {/* Add `/*` for nested routes */}
          <Route path="Quizzes/:id" element={<QuizEditor />} /> {/* Add this line for QuizEditor */}




        </Routes>
      </div>
    </div>
  );
}
