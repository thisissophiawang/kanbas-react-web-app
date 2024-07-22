import React from 'react';
import { useParams, useLocation } from "react-router";
import { courses } from "../../Database"; // 更新了路径
import "./index.css";

export default function CoursesNavigation() {
  const { cid } = useParams();
  const { pathname } = useLocation();
  const course = courses.find((course: { _id: string }) => course._id === cid);
  
  const links = [
    { name: "Home", path: "Home" },
    { name: "Modules", path: "Modules" },
    { name: "Piazza", path: "Piazza" },
    { name: "Zoom", path: "Zoom" },
    { name: "Assignments", path: "Assignments" },
    { name: "Quizzes", path: "Quizzes" },
    { name: "Grades", path: "Grades" },
  ];

  return (
    <div id="wd-courses-navigation" className="list-group rounded-0">
      {links.map((link) => (
        <a
          key={link.name}
          id={`wd-course-${link.name.toLowerCase()}-link`}
          href={`#/Kanbas/Courses/${course?._id}/${link.path}`}
          className={`list-group-item border border-0 ${
            pathname.includes(link.path) ? "active" : "text-danger"
          }`}
        >
          {link.name}
        </a>
      ))}
    </div>
  );
}
