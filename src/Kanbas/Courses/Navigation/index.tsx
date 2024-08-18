// src/Kanbas/Courses/Navigation.tsx
import { useParams } from "react-router";
import "./index.css";

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

export default function CoursesNavigation({ courses }: CoursesProps) {
  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid);
  const links = [
    { label: "Home", path: `#/Kanbas/Courses/${course?._id}/Home` },
    { label: "Modules", path: `#/Kanbas/Courses/${course?._id}/Modules` },
    { label: "Piazza", path: `#/Kanbas/Courses/${course?._id}/Piazza` },
    { label: "Zoom", path: `#/Kanbas/Courses/${course?._id}/Zoom` },
    { label: "Assignments", path: `#/Kanbas/Courses/${course?._id}/Assignments` },
    { label: "Quizzes", path: `#/Kanbas/Courses/${course?._id}/Quizzes` },
    { label: "Grades", path: `#/Kanbas/Courses/${course?._id}/Grades` },
    { label: "People", path: `#/Kanbas/Courses/${course?._id}/People` },

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
