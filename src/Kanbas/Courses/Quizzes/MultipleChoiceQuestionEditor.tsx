import React, { useState } from 'react';
import './MultipleChoiceQuestionEditor.css';

interface Choice {
  text: string;
  isCorrect: boolean;
}

interface MultipleChoiceQuestionEditorProps {
  question: any;
  onSave: (updatedQuestion: any) => void;
  onCancel: () => void;
}

const MultipleChoiceQuestionEditor: React.FC<MultipleChoiceQuestionEditorProps> = ({ question, onSave, onCancel }) => {
  const [questionType, setQuestionType] = useState(question.type || 'Multiple Choice');
  const [title, setTitle] = useState(question.title || '');
  const [points, setPoints] = useState(question.points || 1);
  const [content, setContent] = useState(question.content || '');
  const [choices, setChoices] = useState<Choice[]>(
    question.choices || [
      { text: 'Possible Answer 1', isCorrect: false },
      { text: 'Possible Answer 2', isCorrect: false },
      { text: 'Possible Answer 3', isCorrect: false },
      { text: 'Possible Answer 4', isCorrect: false },
    ]
  );

  const handleChoiceChange = (index: number, field: string, value: any) => {
    const updatedChoices = [...choices];
    updatedChoices[index] = {
      ...updatedChoices[index],
      [field]: value,
    };
    setChoices(updatedChoices);
  };

  const addChoice = () => {
    setChoices([...choices, { text: '', isCorrect: false }]);
  };

  const removeChoice = (index: number) => {
    setChoices(choices.filter((_, i: number) => i !== index));
  };

  const handleSave = () => {
    onSave({
      ...question,
      title,
      points,
      content,
      choices,
    });
  };

  return (
    <div className="multiple-choice-editor">
      <div className="form-group">
        <label htmlFor="questionType">Question Type</label>
        <select
          id="questionType"
          className="form-control"
          value={questionType}
          onChange={(e) => setQuestionType(e.target.value)}
        >
          <option value="True/False">True/False</option>
          <option value="Multiple Choice">Multiple Choice</option>
          <option value="Fill in the Blanks">Fill in the Blanks</option>
        </select>
      </div>

      <div className="form-group points-group">
        <label htmlFor="points">Points</label>
        <input
          id="points"
          type="number"
          className="form-control"
          value={points}
          onChange={(e) => setPoints(Number(e.target.value))}
        />
      </div>

      <div className="form-group">
        <label htmlFor="content">Enter your question and multiple answers, then select the one correct answer:</label>
        <textarea
          id="content"
          className="form-control question-textarea"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Answers:</label>
        {choices.map((choice: Choice, index: number) => (
          <div key={index} className="choice">
            <input
              type="text"
              className="form-control choice-input"
              value={choice.text}
              onChange={(e) => handleChoiceChange(index, 'text', e.target.value)}
              placeholder={`Possible Answer ${index + 1}`}
            />
            <div className="correct-answer-radio">
              <input
                type="radio"
                name="correctChoice"
                checked={choice.isCorrect}
                onChange={() => {
                  const updatedChoices = choices.map((c: Choice, i: number) => ({
                    ...c,
                    isCorrect: i === index,
                  }));
                  setChoices(updatedChoices);
                }}
              />
              <label>Correct Answer</label>
            </div>
            <button onClick={() => removeChoice(index)} className="btn btn-danger remove-btn">Remove</button>
          </div>
        ))}
        <button onClick={addChoice} className="btn btn-secondary add-answer-btn">+ Add Another Answer</button>
      </div>

      <div className="form-group button-group">
        <button onClick={onCancel} className="btn btn-secondary cancel-btn">Cancel</button>
        <button onClick={handleSave} className="btn btn-primary save-btn">Update Question</button>
      </div>
    </div>
  );
};

export default MultipleChoiceQuestionEditor;
