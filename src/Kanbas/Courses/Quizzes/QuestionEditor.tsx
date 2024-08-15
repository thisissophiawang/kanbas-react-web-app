import React from 'react';

export default function QuestionEditor({ questions, setQuestions }: { questions: any[], setQuestions: (questions: any[]) => void }) {

  const addQuestion = () => {
    const newQuestion = {
      id: Date.now(),
      type: 'Multiple Choice',
      points: 1,
      content: '',
    };
    setQuestions([...questions, newQuestion]);
  };

  const handleQuestionChange = (index: number, field: string, value: any) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index] = {
      ...updatedQuestions[index],
      [field]: value,
    };
    setQuestions(updatedQuestions);
  };

  const deleteQuestion = (index: number) => {
    setQuestions(questions.filter((_, i: number) => i !== index));
  };

  const getTotalPoints = () => {
    return questions.reduce((total: number, question: any) => total + question.points, 0);
  };

  return (
    <div className="questions-tab">
      <div className="form-group">
        <button onClick={addQuestion} className="btn btn-primary">
          + New Question
        </button>
      </div>
      
      <ul className="questions-list">
        {questions.map((question: any, index: number) => (
          <li key={question.id} className="question-item">
            <div className="question-header">
              <select 
                value={question.type}
                onChange={(e) => handleQuestionChange(index, 'type', e.target.value)}
              >
                <option value="True/False">True/False</option>
                <option value="Multiple Choice">Multiple Choice</option>
                <option value="Fill in the Blanks">Fill in the Blanks</option>
              </select>
              <input 
                type="number" 
                value={question.points} 
                onChange={(e) => handleQuestionChange(index, 'points', Number(e.target.value))} 
                placeholder="Points"
              />
              <button onClick={() => deleteQuestion(index)} className="btn btn-danger">Delete</button>
            </div>
            <textarea 
              value={question.content} 
              onChange={(e) => handleQuestionChange(index, 'content', e.target.value)} 
              placeholder="Question text"
            />
          </li>
        ))}
      </ul>

      <div className="total-points">
        <strong>Total Points: {getTotalPoints()}</strong>
      </div>
    </div>
  );
}
