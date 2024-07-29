// src/Kanbas/Courses/Modules/ModuleEditor.tsx
import React from 'react';

interface ModuleEditorProps {
  dialogTitle: string;
  moduleName: string;
  setModuleName: (name: string) => void;
  addModule: () => void;
}

export default function ModuleEditor({ dialogTitle, moduleName, setModuleName, addModule }: ModuleEditorProps) {
  return (
    <div id="wd-add-module-dialog" className="modal fade" data-bs-backdrop="static" data-bs-keyboard="false">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">{dialogTitle}</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div className="modal-body">
            <input
              className="form-control"
              value={moduleName}
              placeholder="Module Name"
              onChange={(e) => setModuleName(e.target.value)}
            />
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
            <button onClick={addModule} type="button" className="btn btn-danger" data-bs-dismiss="modal">Add Module</button>
          </div>
        </div>
      </div>
    </div>
  );
}
