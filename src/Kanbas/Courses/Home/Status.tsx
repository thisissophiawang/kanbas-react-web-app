import React from 'react';
import { FaUnlink, FaCheck, FaUpload, FaCloudDownloadAlt, FaHome, FaStream, FaBullhorn, FaChartBar, FaBell } from 'react-icons/fa';
import './Status.css';

export default function CourseStatus() {
  return (
    <div id="wd-course-status">
      <div className="button-row">
        <button><FaUnlink /> Unpublish</button>
        <button className="publish-button"><FaCheck /> Publish</button>
      </div>
      <button><FaUpload /> Import Existing Content</button>
      <button><FaCloudDownloadAlt /> Import from Commons</button>
      <button><FaHome /> Choose Home Page</button>
      <button><FaStream /> View Course Stream</button>
      <button><FaBullhorn /> New Announcement</button>
      <button><FaChartBar /> New Analytics</button>
      <button><FaBell /> View Course Notifications</button>
    </div>
  );
}
