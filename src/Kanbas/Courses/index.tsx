// src/Kanbas/Courses/index.tsx
import { Navigate, Route, Routes, useParams, useLocation } from "react-router";
import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Grades from "./Grades/Grades";
import { courses } from "../Database";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaAlignJustify } from "react-icons/fa";
import KanbasNavigation from "../Navigation";

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

export default function Courses() {
  const { cid } = useParams<{ cid: string }>();
  const course = courses.find((course) => course._id === cid);
  const { pathname } = useLocation();
  
  const currentPath = pathname.split("/")[4] as keyof Breadcrumbs;

  return (
    <div id="wd-kanbas" className="d-flex">
      <KanbasNavigation />
      <div className="d-flex flex-column flex-grow-1">
        <CoursesNavigation />
        <div className="content p-3 flex-grow-1">
          <h2 className="text-danger">
            <FaAlignJustify className="me-3 fs-4 mb-1" />
            {course?.name} &gt; {breadcrumbs[currentPath]} {currentPath}
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
    </div>
  );
}
