import React, { useState } from "react";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import Kanbas from "./Kanbas";
import LandingPage from "./LandingPage";
import Labs from "./Labs";
import Courses from "./Kanbas/Courses"; // Import Courses component
import { courses as dbCourses } from './Kanbas/Database'; // Correct import path

function App() {
  const [courses] = useState(dbCourses);

  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/LandingPage" />} />
          <Route path="/Kanbas/*" element={<Kanbas />} />
          <Route path="/LandingPage" element={<LandingPage />} />
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kanbas/Courses/:cid/*" element={<Courses courses={courses} />} /> {/* Include course ID in the route and pass courses */}
        </Routes>
        <a href="https://github.com/thisissophiawang/kanbas-react-web-app/tree/a1">Github</a>
      </div>
    </HashRouter>
  );
}

export default App;
