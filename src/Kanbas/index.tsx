import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router';
import { Provider } from 'react-redux';
import store from './store';
import Dashboard from './Dashboard';
import Courses from './Courses';
import KanbasNavigation from './Navigation';
import * as client from './Courses/client';
import './styles.css';
import Account from './Courses/Account'; //new import for Account
import Session from './Courses/Account/Session';
import ProtectedRoute from './Courses/Account/ProtectedRoute'; //new import for ProtectedRoute
import { useDispatch } from 'react-redux';
import { setCourses as setCoursesReducer, addCourses, deleteCourses, updateCourses } from './Courses/reducer';

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

const defCourse = {
  _id: "0",
  name: "New Course",
  number: "New Number",
  startDate: "2023-09-10",
  endDate: "2023-12-15",
  image: "reactjs.jpg",
  description: "New Description",
  department: "New Department",
  credits: 3,
};

export default function Kanbas() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [course, setCourse] = useState<Course>(defCourse);
  const dispatch = useDispatch();

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

  useEffect(() => {
    dispatch(setCoursesReducer(courses));
  }, [courses.length]);

  const addNewCourse = async () => {
    try {
      const jsonCourse = JSON.parse(JSON.stringify(course));
      delete jsonCourse._id;
      const newCourse = await client.createCourse(jsonCourse);
      setCourses([...courses, newCourse]);
    } catch (error) {
      console.error("Error creating course:", error);
    }
  };

  const deleteCourse = async (courseId: string) => {
    try {
      await client.deleteCourse(courseId);
      setCourses(courses.filter((c: any) => c._id !== courseId));
    } catch (error) {
      console.error("Error deleting course:", error);
    }
  };

  const updateCourse = async () => {
    try {
      // await client.updateCourse(course);
      setCourses(courses.map((c: any) => (c._id === course._id ? course : c)));
      setCourse(defCourse);
    } catch (error) {
      console.error("Error updating course:", error);
    }
  };

  return (
    <Provider store={store}>
      <Session>
        <div id="wd-kanbas" className="d-flex">
          <KanbasNavigation />
          <div className="wd-main-content-offset p-3 flex-grow-1">
            <Routes>
              <Route
                path="Account/*"
                element={<Account />} // added Account route, which is a child of Kanbas
              />
              <Route
                path="Dashboard"
                element={
                  <ProtectedRoute>
                    <Dashboard
                      courses={courses}
                      course={course}
                      setCourse={setCourse}
                      addNewCourse={addNewCourse}
                      deleteCourse={deleteCourse}
                      updateCourse={updateCourse}
                    />
                  </ProtectedRoute> // added ProtectedRoute to Dashboard
                }
              />
              <Route
                path="Courses/*"
                element={
                  <ProtectedRoute>
                    <Courses />
                  </ProtectedRoute> // added ProtectedRoute to Courses
                }
              />
            </Routes>
          </div>
        </div>
      </Session>
    </Provider>
  );
}
