import React from 'react';
import { useParams } from 'react-router';
import * as db from '../../Database'; 
import ModulesControls from './ModulesControls';
import LessonControlButtons from './LessonControlButtons';
import ModuleControlButtons from './ModuleControlButtons'; // Ensure this import
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Modules.css';
import { BsGripVertical } from 'react-icons/bs';

export default function Modules() {
  const { cid } = useParams();
  const modules = db.modules;
  return (
    <div id="wd-modules">
      <ModulesControls /><br /><br /><br />
      <ul id="wd-modules" className="list-group rounded-0">
      {modules
          .filter((module: any) => module.course === cid)
          .map((module: any) => (
            <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray" key={module._id}>
              <div className="wd-title p-3 ps-2 bg-secondary">
              <BsGripVertical className="me-2 fs-3" />
              {module.name}
                <ModuleControlButtons />
              </div>
              <ul className="wd-lessons list-group rounded-0">
                {module.lessons.map((lesson: any) => (
                  <li className="wd-lesson list-group-item p-3 ps-1" key={lesson._id}>
                    <BsGripVertical className="me-2 fs-3" />
                    {lesson.name}
                    <LessonControlButtons />
                  </li>
                ))}
              </ul>
            </li>
          ))}
      </ul>
    </div>
  );}