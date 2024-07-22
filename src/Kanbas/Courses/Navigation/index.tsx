// src/Kanbas/Courses/Navigation.tsx
import { courses } from "../../Database";
import { useParams } from "react-router";
import "./index.css";

export default function CoursesNavigation() {
  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid);
  const links = [
    { label: "Home", path: `#/Kanbas/Courses/${course?._id}/Home` },
    { label: "Modules", path: `#/Kanbas/Courses/${course?._id}/Modules` },
    { label: "Piazza", path: "#/Kanbas/Courses/1234/Piazza" },
    { label: "Zoom", path: "#/Kanbas/Courses/1234/Zoom" },
    { label: "Assignments", path: `#/Kanbas/Courses/${course?._id}/Assignments` },
    { label: "Quizzes", path: "#/Kanbas/Courses/1234/Quizzes" },
    { label: "Grades", path: "#/Kanbas/Courses/1234/Grades" },
  ];

  return (
    <div id="wd-courses-navigation" className="list-group rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-light z-2" style={{ width: '140px', marginLeft: '120px' }}>
      {links.map((link) => (
        <a key={link.label} href={link.path} className="list-group-item text-danger border border-0">
          {link.label}
        </a>
      ))}
    </div>
  );
}
