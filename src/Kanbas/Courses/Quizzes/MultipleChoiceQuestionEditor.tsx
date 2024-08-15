import React, { useState } from 'react';
import './MultipleChoiceQuestionEditor.css';
import TrueFalseQuestionEditor from './TrueFalseQuestionEditor';
import FillInTheBlanksQuestionEditor from './FillInTheBlanksQuestionEditor';

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
  const [choices, setChoices] = useState<Choice[]>(question.choices || [{ text: '', isCorrect: false }]);

  const handleSave = (updatedQuestion: any) => {
    onSave({
      ...question,
      type: questionType,
      ...updatedQuestion,
      choices,
    });
  };

  const addChoice = () => {
    setChoices([...choices, { text: '', isCorrect: false }]);
  };

  const removeChoice = (index: number) => {
    setChoices(choices.filter((_, i) => i !== index));
  };

  const handleChoiceChange = (index: number, field: string, value: any) => {
    const updatedChoices = [...choices];
    updatedChoices[index] = { ...updatedChoices[index], [field]: value };
    setChoices(updatedChoices);
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
            <div className="form-group">
              <label>Title</label>
              <input
                type="text"
                className="form-control"
                value={question.title || ''}
                onChange={(e) => handleSave({ title: e.target.value })}
                placeholder="Enter question title here"
              />
            </div>

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
              <label>Multiple Choice Question：</label>
              <label>Enter your question and multiple answers, then select the one correct answer:</label>
              <textarea
                id="content"
                className="form-control question-textarea"
                value={question.content || ''}
                onChange={(e) => handleSave({ content: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label>Answers:</label>
              {choices.map((choice, index) => (
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
                        setChoices(
                          choices.map((c, i) => ({
                            ...c,
                            isCorrect: i === index,
                          }))
                        );
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
              <button onClick={() => handleSave({ choices })} className="btn btn-primary save-btn">Update Question</button>
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
