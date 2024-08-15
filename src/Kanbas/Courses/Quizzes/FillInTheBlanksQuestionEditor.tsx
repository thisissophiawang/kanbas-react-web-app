// src/Kanbas/Courses/Quizzes/FillInTheBlanksQuestionEditor.tsx

import React, { useState } from 'react';

interface FillInTheBlanksQuestionEditorProps {
  question: any;
  onSave: (updatedQuestion: any) => void;
  onCancel: () => void;
}

const FillInTheBlanksQuestionEditor: React.FC<FillInTheBlanksQuestionEditorProps> = ({ question, onSave, onCancel }) => {
  const [title, setTitle] = useState(question.title || '');
  const [points, setPoints] = useState(question.points || 1);
  const [content, setContent] = useState(question.content || '');

  const handleSave = () => {
    onSave({
      ...question,
      title,
      points,
      content,
    });
  };

  return (
    <div className="fill-in-the-blanks-editor">
      <div className="form-group">
        <label>Title</label>
        <input
          type="text"
          className="form-control"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Points</label>
        <input
          type="number"
          className="form-control"
          value={points}
          onChange={(e) => setPoints(Number(e.target.value))}
        />
      </div>

      <div className="form-group">
        <label>Question</label>
        <textarea
          className="form-control"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>

      <div className="form-group">
        <button onClick={onCancel} className="btn btn-secondary">Cancel</button>
        <button onClick={handleSave} className="btn btn-primary">Save/Update Question</button>
      </div>
    </div>
  );
};

export default FillInTheBlanksQuestionEditor;
