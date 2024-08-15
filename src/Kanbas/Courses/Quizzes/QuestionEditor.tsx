import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MultipleChoiceQuestionEditor from './MultipleChoiceQuestionEditor';

export default function QuestionEditor({ questions, setQuestions }: { questions: any[], setQuestions: (questions: any[]) => void }) {
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const navigate = useNavigate(); // Use navigate instead of useHistory

  const addQuestion = () => {
    const newQuestion = {
      id: Date.now(),
      type: 'Multiple Choice',  // Default type is Multiple Choice
      points: 1,
      content: '',
      choices: [{ text: '', isCorrect: false }],  // Default choices for multiple choice
    };
    setQuestions([...questions, newQuestion]);
    setEditingIndex(questions.length); // Set the newly added question as the one being edited
  };

  const handleQuestionChange = (index: number, updatedQuestion: any) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index] = updatedQuestion;
    setQuestions(updatedQuestions);
  };

  const deleteQuestion = (index: number) => {
    setQuestions(questions.filter((_, i) => i !== index));
  };

  const getTotalPoints = () => {
    return questions.reduce((total, question) => total + question.points, 0);
  };

  const handleSaveAndPreview = () => {
    // Save the quiz data here (e.g., send to the backend)
    // After saving, navigate to the preview page
    navigate('/quiz-preview'); // Adjust the path based on your routing setup
  };

  return (
    <div className="questions-tab">
      <div className="form-group">
        <button onClick={addQuestion} className="btn btn-primary">
          + New Question
        </button>
      </div>

      <ul className="questions-list">
        {questions.map((question, index) => (
          <li key={question.id} className="question-item">
            {editingIndex === index ? (
              <MultipleChoiceQuestionEditor
                question={question}
                onSave={(updatedQuestion: any) => {
                  handleQuestionChange(index, updatedQuestion);
                  setEditingIndex(null); // Exit edit mode after saving
                }}
                onCancel={() => setEditingIndex(null)} // Exit edit mode without saving
              />
            ) : (
              <div className="question-preview">
                <h4>{question.title || 'Untitled Question'}</h4>
                <p>{question.content}</p>
                <button onClick={() => setEditingIndex(index)} className="btn btn-secondary">Edit</button>
                <button onClick={() => deleteQuestion(index)} className="btn btn-danger">Delete</button>
              </div>
            )}
          </li>
        ))}
      </ul>

      <div className="total-points">
        <strong>Total Points: {getTotalPoints()}</strong>
      </div>

      {/* Add the "Save and Preview" button here */}
      <div className="form-group button-group">
        <button onClick={handleSaveAndPreview} className="btn btn-primary save-btn">
          Save and Preview Quiz
        </button>
      </div>
    </div>
  );
}
