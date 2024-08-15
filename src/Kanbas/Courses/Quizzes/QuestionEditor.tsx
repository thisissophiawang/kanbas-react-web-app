import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MultipleChoiceQuestionEditor from './MultipleChoiceQuestionEditor';


export default function QuestionEditor({ questions, setQuestions }: { questions: any[], setQuestions: (questions: any[]) => void }) {
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const navigate = useNavigate();

  const addQuestion = () => {
    const newQuestion = {
      id: Date.now(),
      type: 'Multiple Choice',
      points: 1,
      content: '',
      choices: [{ text: '', isCorrect: false }],
    };
    setQuestions([...questions, newQuestion]);
    setEditingIndex(questions.length);
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

  const handleSaveAndPreview = async () => {
    try {
      // Simulate saving the quiz data to the backend and receiving the quiz ID
      const response = await fetch('/api/quizzes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ questions }), // You might need to adjust the payload structure
      });
      const savedQuiz = await response.json();

      // Navigate to the preview page with the saved quiz ID
      navigate(`/quiz-preview/${savedQuiz._id}`);
    } catch (error) {
      console.error('Error saving quiz:', error);
    }
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
                  setEditingIndex(null);
                }}
                onCancel={() => setEditingIndex(null)}
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

      <div className="form-group button-group">
        <button onClick={handleSaveAndPreview} className="btn btn-primary save-btn">
          Save and Preview Quiz
        </button>
      </div>
    </div>
  );
}
