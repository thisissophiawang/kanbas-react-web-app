import React, { useState } from 'react';
import './MultipleChoiceQuestionEditor.css';
import TrueFalseQuestionEditor from './TrueFalseQuestionEditor'; // Import True/False editor
import FillInTheBlanksQuestionEditor from './FillInTheBlanksQuestionEditor'; // Import Fill in the Blanks editor

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

  const handleSave = (updatedQuestion: any) => {
    onSave({
      ...question,
      type: questionType,
      ...updatedQuestion,
    });
  };

  const renderEditor = () => {
    switch (questionType) {
      case 'True/False':
        return <TrueFalseQuestionEditor question={question} onSave={handleSave} onCancel={onCancel} />;
      case 'Fill in the Blanks':
        return <FillInTheBlanksQuestionEditor question={question} onSave={handleSave} onCancel={onCancel} />;
      case 'Multiple Choice':
      default:
        return (
          <div className="multiple-choice-editor">
            <div className="form-group points-group">
              <label htmlFor="points">Points</label>
              <input
                id="points"
                type="number"
                className="form-control"
                value={question.points || 1}
                onChange={(e) => handleSave({ points: Number(e.target.value) })}
              />
            </div>

            <div className="form-group">
              <label htmlFor="content">Enter your question and multiple answers, then select the one correct answer:</label>
              <textarea
                id="content"
                className="form-control question-textarea"
                value={question.content || ''}
                onChange={(e) => handleSave({ content: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label>Answers:</label>
              {question.choices.map((choice: Choice, index: number) => (
                <div key={index} className="choice">
                  <input
                    type="text"
                    className="form-control choice-input"
                    value={choice.text}
                    onChange={(e) => handleSave({
                      choices: question.choices.map((c: Choice, i: number) => i === index ? { ...c, text: e.target.value } : c)
                    })}
                    placeholder={`Possible Answer ${index + 1}`}
                  />
                  <div className="correct-answer-radio">
                    <input
                      type="radio"
                      name="correctChoice"
                      checked={choice.isCorrect}
                      onChange={() => handleSave({
                        choices: question.choices.map((c: Choice, i: number) => ({ ...c, isCorrect: i === index }))
                      })}
                    />
                    <label>Correct Answer</label>
                  </div>
                  <button onClick={() => handleSave({
                    choices: question.choices.filter((unused: any, i: number) => i !== index)
                  })} className="btn btn-danger remove-btn">Remove</button>
                </div>
              ))}
              <button onClick={() => handleSave({
                choices: [...question.choices, { text: '', isCorrect: false }]
              })} className="btn btn-secondary add-answer-btn">+ Add Another Answer</button>
            </div>

            <div className="form-group button-group">
              <button onClick={onCancel} className="btn btn-secondary cancel-btn">Cancel</button>
              <button onClick={() => handleSave(question)} className="btn btn-primary save-btn">Update Question</button>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="question-editor-container">
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
      {renderEditor()}
    </div>
  );
};

export default MultipleChoiceQuestionEditor;
