import React from 'react';
import './LandingPage.css'; // 如果有需要添加样式的话

export default function LandingPage() {
  return (
    <div id="wd-landing-page">
      <h1>Landing Page</h1>
      <p><strong>Name:</strong> Xinyi Wang/Sophia</p>
      <p><strong>Section:</strong> CS5610 Summer II</p>
      <h2>A1 Links</h2>
      <ul>
        <li><strong>Account:</strong> <a href="https://a1--kanbas-react-web-app-sophia.netlify.app/#/Kanbas/Account">https://a1--kanbas-react-web-app-sophia.netlify.app/#/Kanbas/Account</a></li>
        <li><strong>Dashboard:</strong> <a href="https://a1--kanbas-react-web-app-sophia.netlify.app/#/Kanbas/Dashboard">https://a1--kanbas-react-web-app-sophia.netlify.app/#/Kanbas/Dashboard</a></li>
        <li><strong>Course:</strong> <a href="https://a1--kanbas-react-web-app-sophia.netlify.app/#/Kanbas/Courses/1234/Home">https://a1--kanbas-react-web-app-sophia.netlify.app/#/Kanbas/Courses/1234/Home</a></li>
        <li><strong>Modules:</strong> <a href="https://a1--kanbas-react-web-app-sophia.netlify.app/#/Kanbas/Courses/1234/Modules">https://a1--kanbas-react-web-app-sophia.netlify.app/#/Kanbas/Courses/1234/Modules</a></li>
        <li><strong>Assignments:</strong> <a href="https://a1--kanbas-react-web-app-sophia.netlify.app/#/Kanbas/Courses/1234/Assignments">https://a1--kanbas-react-web-app-sophia.netlify.app/#/Kanbas/Courses/1234/Assignments</a></li>
        <li><strong>Assignment Edit:</strong> <a href="https://a1--kanbas-react-web-app-sophia.netlify.app/#/Kanbas/Courses/1234/Assignments/123">https://a1--kanbas-react-web-app-sophia.netlify.app/#/Kanbas/Courses/1234/Assignments/123</a></li>
      </ul>
      <h2>Links to all relevant source code repositories</h2>
      <p><a href="https://github.com/thisissophiawang/kanbas-react-web-app/tree/a1">Github Repository</a></p>
    </div>
  );
}

