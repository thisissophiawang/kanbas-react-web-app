import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css'; // Import the updated CSS file

const LandingPage: React.FC = () => {
  return (
    <div className="landing-page-container">
      <header className="landing-page-header">
        <h1>Welcome to NEU Kanbas</h1>
        <h2>CS5610 Web Development - Summer II</h2>
      </header>
      
      <section className="team-section">
        <h3>Web Dev Team 5</h3>
        <ul>
          <li><strong>Xinyi Wang/Sophia</strong></li>
          <li><strong>Yingcong Lu</strong></li>
          <li><strong>Yijia Cao</strong></li>
          <li><strong>Teng Liu</strong></li>
        </ul>
      </section>

      <section className="kanbas-section">
        <h2>NEU Kanbas</h2>
        <p>
          "NEU Kanbas" is a custom-built learning management system designed exclusively 
          for Northeastern University. It enhances the online learning experience with a dynamic 
          Quizzes section. 
        </p>
        <p>
          Faculty can easily create and manage quizzes, while students benefit from 
          an intuitive interface for taking quizzes and tracking their progress.
        </p>
        <p>
          By investing in NEU Kanbas, you're supporting a scalable, cutting-edge educational tool 
          that elevates digital learning at Northeastern University.
        </p>
        <ul>
          <li>
            <Link to="/Kanbas" className="btn btn-primary">
              Go to Kanbas
            </Link>
          </li>
        </ul>
      </section>

      <section className="repository-section">
        <h2>Relevant Source Code Repositories</h2>
        {/* <a href="https://github.com/thisissophiawang/kanbas-node-server-app/tree/final-project" target="_blank" rel="noopener noreferrer">GitHub Repository</a> */}
      </section>
    </div>
  );
}

export default LandingPage;
