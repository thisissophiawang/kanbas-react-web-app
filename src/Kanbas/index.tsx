// src/Kanbas/index.tsx
import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router';
import { Provider } from 'react-redux';
import store from './store';
import Dashboard from './Dashboard';
import Courses from './Courses';
import KanbasNavigation from './Navigation';
import * as client from './Courses/client';
import './styles.css'; // Ensure this path is correct

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

export default function Kanbas() {
  const [courses, setCourses] = useState<Course[]>([]);
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await client.fetchAllCourses();
        setCourses(data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };
    fetchData();
  }, []);

  const addNewCourse = () => {
    const newCourse = { ...course, _id: new Date().getTime().toString(), image: "reactjs.jpg" };
    setCourses([...courses, newCourse]);
  };

  const deleteCourse = (courseId: string) => {
    setCourses(courses.filter((course) => course._id !== courseId));
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
    <Provider store={store}>
      <div id="wd-kanbas" className="d-flex">
        <KanbasNavigation />
        <div className="wd-main-content-offset p-3 flex-grow-1">
          <Routes>
            <Route path="Dashboard" element={
              <Dashboard
                courses={courses}
                course={course}
                setCourse={setCourse}
                addNewCourse={addNewCourse}
                deleteCourse={deleteCourse}
                updateCourse={updateCourse}
              />
            } />
            <Route path="Courses/*" element={<Courses courses={courses} />} />
          </Routes>
        </div>
      </div>
    </Provider>
  );
}
