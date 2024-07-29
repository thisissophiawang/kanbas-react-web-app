// src/Kanbas/Courses/Modules/index.tsx
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import ModulesControls from './ModulesControls';
import LessonControlButtons from './LessonControlButtons';
import ModuleControlButtons from './ModuleControlButtons';
import ModuleEditor from './ModuleEditor';
import { addModule } from './reducer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Modules.css';
import { BsGripVertical } from 'react-icons/bs';

export default function Modules() {
  const { cid } = useParams<{ cid: string }>();
  const modules = useSelector((state: any) => state.modules.modules);
  const dispatch = useDispatch();

  const [moduleName, setModuleName] = useState('');

  const handleAddModule = () => {
    dispatch(addModule({ name: moduleName, course: cid }));
    setModuleName('');
  };

  return (
    <div id="wd-modules">
      <ModulesControls /><br /><br /><br />
      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#wd-add-module-dialog">
        Add Module
      </button>
      <ModuleEditor
        dialogTitle="Add Module"
        moduleName={moduleName}
        setModuleName={setModuleName}
        addModule={handleAddModule}
      />
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
  );
}
