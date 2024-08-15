import React, { useState } from 'react';
import './TrueFalseQuestionEditor.css';  // Import the CSS file

interface TrueFalseQuestionEditorProps {
  question: any;
  onSave: (updatedQuestion: any) => void;
  onCancel: () => void;
}

const TrueFalseQuestionEditor: React.FC<TrueFalseQuestionEditorProps> = ({ question, onSave, onCancel }) => {
  const [title, setTitle] = useState(question.title || '');
  const [points, setPoints] = useState(question.points || 1);
  const [content, setContent] = useState(question.content || '');
  const [isTrue, setIsTrue] = useState(question.isTrue || false);

  const handleSave = () => {
    onSave({
      ...question,
      title,
      points,
      content,
      isTrue,
    });
  };

  return (
    <div className="true-false-editor">
      <div className="form-group">
        <input
          type="text"
          className="form-control question-title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter question title here"
        />
        <div className="points-container">
          <label>pts:</label>
          <input
            type="number"
            className="form-control points-input"
            value={points}
            onChange={(e) => setPoints(Number(e.target.value))}
          />
        </div>
      </div>

      <div className="form-group">
        <label>TRUE /FALSE Question：</label>
        <label>Enter your question text, then select if True or False is the correct answer.</label>
        <textarea
          className="form-control question-textarea"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Enter the question here"
        />
      </div>

      <div className="form-group">
        <label>Answers:</label>
        <div className="true-false-options">
          <label className={`option ${isTrue ? 'selected' : ''}`}>
            <input
              type="radio"
              name="trueFalse"
              checked={isTrue}
              onChange={() => setIsTrue(true)}
            />
            <span className="arrow">&#x27A4;</span> {/* Right arrow */}
            <span className="text-label">True</span>
          </label>
          <label className={`option ${!isTrue ? 'false-selected selected' : ''}`}>
            <input
              type="radio"
              name="trueFalse"
              checked={!isTrue}
              onChange={() => setIsTrue(false)}
            />
            <span className="arrow">&#x27A4;</span> {/* Right arrow */}
            <span className="text-label">False</span>
          </label>
        </div>
      </div>

      <div className="form-group button-group">
        <button onClick={onCancel} className="btn btn-secondary cancel-btn">Cancel</button>
        <button onClick={handleSave} className="btn btn-primary save-btn">Update Question</button>
      </div>
    </div>
  );
};

export default TrueFalseQuestionEditor;
