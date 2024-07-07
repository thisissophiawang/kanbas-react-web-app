import { Routes, Route, Navigate } from "react-router";
import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";

export default function Courses() {
  return (
      <div id="wd-courses">
        <h2>Course 1234</h2>
        <hr />
        <table width="100%">
          <tbody>
          <tr>
            <td valign="top">
              <CoursesNavigation />
            </td>
            <td valign="top">
              <Routes>
                <Route path="/" element={<Navigate to="Home" />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/Modules" element={<Modules />} />
                <Route path="/Piazza" element={<h1>Piazza</h1>} />
                <Route path="/Zoom" element={<h1>Zoom</h1>} />
                <Route path="Assignments" element={<Assignments />} />
                <Route path="Assignments/:id" element={<AssignmentEditor />} />
                <Route path="/Quizzes" element={<h1>Quizzes</h1>} />
                <Route path="/Grades" element={<h1>Grades</h1>} />
              </Routes>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
  );
}

