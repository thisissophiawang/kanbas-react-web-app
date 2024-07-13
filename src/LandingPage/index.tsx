import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage: React.FC = () => {
  return (
    <div>
      <h1>Landing Page</h1>
      <br></br>
      <h2>Welcome to CS5610 Web Development </h2>
      <p><strong>Name:</strong> Xinyi Wang/Sophia</p>
      <p><strong>Section:</strong> CS5610 Summer II</p>

      <h2>Labs</h2>
      <ul>
        <li><Link to="/Labs/Lab1">Lab 1</Link></li>
        <li><Link to="/Labs/Lab2">Lab 2</Link></li>
        <li><Link to="/Labs/Lab3">Lab 3</Link></li>
      </ul>

      <h2>Kanbas</h2>
      <ul>
        <li><Link to="/Kanbas">Kanbas</Link></li>
      </ul>

      <h2>Links to all relevant source code repositories</h2>
      <p><a href="https://github.com/thisissophiawang/kanbas-react-web-app/tree/a1">Github Repository</a></p>

    </div>
  );
}

export default LandingPage;
