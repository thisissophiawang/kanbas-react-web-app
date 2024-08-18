import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { setModules, addModule, deleteModule, editModule, updateModule } from './reducer';
import ModulesControls from './ModulesControls';
import LessonControlButtons from './LessonControlButtons';
import ModuleControlButtons from './ModuleControlButtons';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Modules.css';
import { BsGripVertical } from 'react-icons/bs';
import * as client from './client';

export default function Modules() {
  const { cid } = useParams<{ cid: string }>();
  const [moduleName, setModuleName] = useState('');
  const modules = useSelector((state: any) => state.modulesReducer.modules || []);
  const curUser = useSelector((state: any) => state.accountReducer.currentUser || {});
  const dispatch = useDispatch();
  const isStudent = curUser?.role === 'STUDENT';

  const saveModule = async (module: any) => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };

  const removeModule = async (moduleId: string) => {
    await client.deleteModule(moduleId);
    dispatch(deleteModule(moduleId));
  };

  const createModule = async (module: any) => {
    if(isStudent) {
      // 其他角色是有权限的，比如admin这些需要你们自己定义
      window.alert('sorry! do not have access');
      return;
    }
    const newModule = await client.createModule(cid as string, module);
    dispatch(addModule(newModule));
  };

  const fetchModules = async () => {
    const modules = await client.findModulesForCourse(cid as string);
    dispatch(setModules(modules));
  };

  useEffect(() => {
    fetchModules();
  }, [cid]);

  return (
    <div id="wd-modules">
      <ModulesControls
        setModuleName={setModuleName}
        moduleName={moduleName}
        addModule={() => {
          createModule({ name: moduleName, course: cid });
          setModuleName('');
        }}
      />
      <br />
      <br />
      <br />
      <br />
      <ul id="wd-modules" className="list-group rounded-0">
        {modules
          .filter((module: any) => module.course === cid)
          .map((module: any) => (
            <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray" key={module._id}>
              <div className="wd-title p-3 ps-2 bg-secondary text-white">
                <BsGripVertical className="me-2 fs-3" />
                {!module.editing ? (
                  module.name
                ) : (
                  <input
                    disabled={curUser?.role === 'USER'}
                    className="form-control w-50 d-inline-block"
                    value={module.name}
                    onChange={(e) => saveModule({ ...module, name: e.target.value })}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        saveModule({ ...module, editing: false });
                      }
                    }}
                  />
                )}
                {!isStudent && (
                  <ModuleControlButtons
                    moduleId={module._id}
                    deleteModule={(moduleId) => {
                      removeModule(moduleId);
                    }}
                    editModule={(moduleId) => dispatch(editModule(moduleId))}
                  />
                )}
              </div>
              {module.lessons && (
                <ul className="wd-lessons list-group rounded-0">
                  {module.lessons.map((lesson: any) => (
                    <li className="wd-lesson list-group-item p-3 ps-1" key={lesson._id}>
                      <BsGripVertical className="me-2 fs-3" />
                      {lesson.name}
                      <LessonControlButtons />
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
      </ul>
    </div>
  );
}
