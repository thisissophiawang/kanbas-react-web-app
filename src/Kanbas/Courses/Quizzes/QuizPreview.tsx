// src/Kanbas/Courses/Quizzes/QuizPreview.tsx

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const QuizPreview: React.FC = () => {
  const { quizId } = useParams<{ quizId: string }>(); // Assuming you're using React Router
  const [quiz, setQuiz] = useState<any>(null);

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const response = await fetch(`/api/quizzes/${quizId}`);
        const data = await response.json();
        setQuiz(data);
      } catch (error) {
        console.error('Error fetching quiz:', error);
      }
    };

    fetchQuiz();
  }, [quizId]);

  if (!quiz) {
    return <div>Loading...</div>;
  }

  return (
    <div className="quiz-preview">
      <h1>{quiz.title}</h1>
      {quiz.questions.map((question: any, index: number) => (
        <div key={index} className="question">
          <h2>Question {index + 1}: {question.content}</h2>
          {question.type === 'Multiple Choice' && (
            <ul>
              {question.choices.map((choice: any, i: number) => (
                <li key={i}>{choice.text}</li>
              ))}
            </ul>
          )}
          {question.type === 'True/False' && (
            <ul>
              <li>True</li>
              <li>False</li>
            </ul>
          )}
          {question.type === 'Fill in the Blanks' && (
            <p>Fill in the blank: ________</p>
          )}
        </div>
      ))}
      <button>Submit Quiz</button>
    </div>
  );
};

export default QuizPreview;
