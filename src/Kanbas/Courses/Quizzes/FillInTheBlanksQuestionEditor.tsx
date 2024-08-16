import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './FillInTheBlanksQuestionEditor.css';

interface FillInTheBlanksQuestionEditorProps {
  question: any;
  onSave: (updatedQuestion: any) => void;
  onCancel: () => void;
}

const FillInTheBlanksQuestionEditor: React.FC<FillInTheBlanksQuestionEditorProps> = ({ question, onSave, onCancel }) => {
  const [title, setTitle] = useState(question.title || '');
  const [points, setPoints] = useState(question.points || 1);
  const [content, setContent] = useState(question.content || '');
  const [answers, setAnswers] = useState<string[]>(question.answers || ['']);

  const handleAnswerChange = (index: number, value: string) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index] = value;
    setAnswers(updatedAnswers);
  };

  const addAnswer = () => {
    setAnswers([...answers, '']);
  };

  const removeAnswer = (index: number) => {
    setAnswers(answers.filter((_, i) => i !== index));
  };

  const handleSave = () => {
    onSave({
      ...question,
      title,
      points,
      content,
      answers,
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
        <label>Fill in Blanks Question:</label>
        <label>
          Enter your question text, then define all possible correct answers for the blanks. <br />
          Students will see the question followed by a small text box to type their answer.
        </label>
        <ReactQuill
          className="form-control"
          value={content}
          onChange={setContent}
        />
      </div>

      <div className="form-group">
        <label>Answers:</label>
        {answers.map((answer, index) => (
          <div key={index} className="answer">
            <input
              type="text"
              className="form-control"
              value={answer}
              onChange={(e) => handleAnswerChange(index, e.target.value)}
              placeholder={`Possible Answer ${index + 1}`}
            />
            <button onClick={() => removeAnswer(index)} className="btn btn-danger">Remove</button>
          </div>
        ))}
        <button onClick={addAnswer} className="btn btn-secondary">+ Add Another Answer</button>
      </div>

      <div className="form-group">
        <button onClick={onCancel} className="btn btn-secondary">Cancel</button>
        <button onClick={handleSave} className="btn btn-primary">Save/Update Question</button>
      </div>
    </div>
  );
};

export default FillInTheBlanksQuestionEditor;
