// src/Kanbas/Courses/Modules/index.tsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import ModulesControls from './ModulesControls';
import LessonControlButtons from './LessonControlButtons';
import ModuleControlButtons from './ModuleControlButtons';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Modules.css';
import { BsGripVertical } from 'react-icons/bs';
import modulesData from '../../Database/modules.json'; // Import the modules data

interface Lesson {
  _id: string;
  name: string;
}

interface Module {
  _id: string;
  name: string;
  course: string;
  lessons: Lesson[];
}

export default function Modules() {
  const { cid } = useParams<{ cid: string }>();
  const initialModules = modulesData.map((module) => ({
    ...module,
    lessons: module.lessons || [], // Ensure lessons is always an array
  })) as Module[];
  const [modules, setModules] = useState<Module[]>(initialModules); // Initialize with database modules
  const [moduleName, setModuleName] = useState('');

  const addModule = () => {
    setModules([
      ...modules,
      { _id: new Date().getTime().toString(), name: moduleName, course: cid || '', lessons: [] },
    ]);
    setModuleName('');
    console.log('Module added:', { _id: new Date().getTime().toString(), name: moduleName, course: cid || '', lessons: [] });
  };

  useEffect(() => {
    // For debugging purposes: log the modules state whenever it changes
    console.log('Modules state:', modules);
  }, [modules]);

  return (
    <div className="ad-modules">
      <div className="ad-modules">
        <ModulesControls setModuleName={setModuleName} moduleName={moduleName} addModule={addModule} />
      </div>
      <ul id="wd-modules" className="list-group rounded-0">
        {modules
          .filter((module) => module.course === cid)
          .map((module) => (
            <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray" key={module._id}>
              <div className="wd-title p-3 ps-2 bg-secondary">
                <BsGripVertical className="me-2 fs-3" />
                {module.name}
                <ModuleControlButtons />
              </div>
              <ul className="wd-lessons list-group rounded-0">
                {module.lessons.map((lesson: Lesson) => (
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
  );
}
