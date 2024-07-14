import React from 'react';
import './SearchStyles.css'; // 确保引入CSS文件

export default function SearchInputs() {
  return (
    <div className="d-flex flex-wrap">
      <div className="search-container me-3">
        <label htmlFor="student-search">Student Names</label>
        <div className="search-wrapper">
          <input type="text" id="student-search" placeholder="Search Students" />
          <span className="icon">🔍</span>
          <span className="dropdown-icon">▼</span>
        </div>
      </div>
      <div className="search-container">
        <label htmlFor="assignment-search">Assignment Names</label>
        <div className="search-wrapper">
          <input type="text" id="assignment-search" placeholder="Search Assignments" />
          <span className="icon">🔍</span>
          <span className="dropdown-icon">▼</span>
        </div>
      </div>
    </div>
  );
}
