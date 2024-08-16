import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './FillInTheBlanksQuestionEditor.css';
import { FaArrowRight } from 'react-icons/fa'; // Import the arrow icon

interface FillInTheBlanksQuestionEditorProps {
  question: any;
  onSave: (updatedQuestion: any) => void;
  onCancel: () => void;
}

const FillInTheBlanksQuestionEditor: React.FC<FillInTheBlanksQuestionEditorProps> = ({ question, onSave, onCancel }) => {
  const [title, setTitle] = useState(question.title || '');
  const [points, setPoints] = useState(question.points || 1);
  const [content, setContent] = useState(question.content || '');
  const [correctAnswer, setCorrectAnswer] = useState(question.correctAnswer || 'True'); // Use correctAnswer instead of a list of answers

  const handleSave = () => {
    onSave({
      ...question,
      title,
      points,
      content,
      correctAnswer,
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
        <label>True/False Question:</label>
        <label>
          Enter your question text, then select if True or False is the correct answer.
        </label>
      </div>

      <div className="form-group">
        <label>Question:</label>
        <ReactQuill
          className="form-control"
          value={content}
          onChange={setContent}
        />
      </div>

      <div className="form-group">
        <label>Answers:</label>
        <div className="answer-option">
          <FaArrowRight size={24} style={{ color: correctAnswer === 'True' ? 'green' : 'gray' }} />
          <span
            style={{ color: correctAnswer === 'True' ? 'green' : 'black', cursor: 'pointer', marginLeft: '8px' }}
            onClick={() => setCorrectAnswer('True')}
          >
            True
          </span>
        </div>
        <div className="answer-option">
          <FaArrowRight size={24} style={{ color: correctAnswer === 'False' ? 'green' : 'gray' }} />
          <span
            style={{ color: correctAnswer === 'False' ? 'green' : 'black', cursor: 'pointer', marginLeft: '8px' }}
            onClick={() => setCorrectAnswer('False')}
          >
            False
          </span>
        </div>
      </div>

      <div className="form-group">
        <button onClick={onCancel} className="btn btn-secondary">Cancel</button>
        <button onClick={handleSave} className="btn btn-danger">Update Question</button>
      </div>
    </div>
  );
};

export default FillInTheBlanksQuestionEditor;
