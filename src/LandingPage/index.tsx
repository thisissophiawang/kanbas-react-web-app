import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div>
      <h1>Landing Page</h1>
      <p><strong>Name:</strong> Xinyi Wang/Sophia</p>
      <p><strong>Section:</strong> CS5610 Summer II</p>

      <h2>A1 Links</h2>
      <ul>
        <li><a href="https://a1--kanbas-react-web-app-sophia.netlify.app/#/Kanbas/Account">Account</a></li>
        <li><a href="https://a1--kanbas-react-web-app-sophia.netlify.app/#/Kanbas/Dashboard">Dashboard</a></li>
        <li><a href="https://a1--kanbas-react-web-app-sophia.netlify.app/#/Kanbas/Courses/1234/Home">Course</a></li>
        <li><a href="https://a1--kanbas-react-web-app-sophia.netlify.app/#/Kanbas/Courses/1234/Modules">Modules</a></li>
        <li><a href="https://a1--kanbas-react-web-app-sophia.netlify.app/#/Kanbas/Courses/1234/Assignments">Assignments</a></li>
        <li><a href="https://a1--kanbas-react-web-app-sophia.netlify.app/#/Kanbas/Courses/1234/Assignments/123">Assignment Edit</a></li>
      </ul>

      <h2>Links to all relevant source code repositories</h2>
      <p><a href="https://github.com/thisissophiawang/kanbas-react-web-app/tree/a1">Github Repository</a></p>

      <h2>Labs</h2>
      <ul>
        <li><Link to="/Lab1">Lab 1</Link></li>
        <li><Link to="/Lab2">Lab 2</Link></li>
        <li><Link to="/Lab3">Lab 3</Link></li>
      </ul>
    </div>
  );
}

export default LandingPage;



