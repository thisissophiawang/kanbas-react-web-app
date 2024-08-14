//Users/sophiawang/2024/summer/webdev/kanbas-react-web-app/src/Kanbas/Courses/Quizzes/Editor.tsx
import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addQuiz, updateQuiz, setQuizzes } from './reducer';
import * as client from './client';

export default function QuizEditor() {
  const { id, cid } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { quizzes } = useSelector((state: any) => state.quizzesReducer);
  const [quiz, setQuiz] = useState<any>(null);

  const fetchQuizzes = async () => {
    const quizzes = await client.findQuizzesForCourse(cid as string);
    dispatch(setQuizzes(quizzes));
  };

  useEffect(() => {
    fetchQuizzes();
  }, [cid]);

  useEffect(() => {
    if (id === 'new') {
      setQuiz({
        title: '',
        points: 0,
        type: 'Graded Quiz',
        dueDate: '',
        availableDate: '',
        untilDate: '',
        course: cid,
      });
    } else {
      const foundQuiz = quizzes.find((q: any) => q._id === id);
      setQuiz(foundQuiz);
    }
  }, [id, quizzes, cid]);

  if (!quiz) {
    return <div>Loading...</div>; // loading screen
  }

  return (
    <div id="wd-quizzes-editor">
      <div className="form-group">
        <label htmlFor="wd-title">Quiz Title</label>
        <input 
          id="wd-title" 
          className="form-control"
          value={quiz.title} 
          onChange={(e) => setQuiz({ ...quiz, title: e.target.value })} 
        />
      </div>

      <div className="form-group">
        <label htmlFor="wd-type">Quiz Type</label>
        <select 
          id="wd-type" 
          className="form-control"
          value={quiz.type} 
          onChange={(e) => setQuiz({ ...quiz, type: e.target.value })} 
        >
          <option value="Graded Quiz">Graded Quiz</option>
          <option value="Practice Quiz">Practice Quiz</option>
          <option value="Graded Survey">Graded Survey</option>
          <option value="Ungraded Survey">Ungraded Survey</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="wd-points">Points</label>
        <input 
          id="wd-points" 
          className="form-control"
          type="number" 
          value={quiz.points} 
          onChange={(e) => setQuiz({ ...quiz, points: Number(e.target.value) })} 
        />
      </div>

      <div className="form-group">
        <label htmlFor="wd-due-date">Due Date</label>
        <input 
          id="wd-due-date" 
          className="form-control"
          type="date" 
          value={quiz.dueDate} 
          onChange={(e) => setQuiz({ ...quiz, dueDate: e.target.value })} 
        />
      </div>

      <div className="form-group">
        <label htmlFor="wd-available-date">Available From</label>
        <input 
          id="wd-available-date" 
          className="form-control"
          type="date" 
          value={quiz.availableDate} 
          onChange={(e) => setQuiz({ ...quiz, availableDate: e.target.value })} 
        />
      </div>

      <div className="form-group">
        <label htmlFor="wd-until-date">Available Until</label>
        <input 
          id="wd-until-date" 
          className="form-control"
          type="date" 
          value={quiz.untilDate} 
          onChange={(e) => setQuiz({ ...quiz, untilDate: e.target.value })} 
        />
      </div>

     
      <div className="form-group btn-container">
        <Link to={`/Kanbas/Courses/${quiz.course}/Quizzes`} className="btn btn-secondary">Cancel</Link>
        <button 
          className="btn btn-danger" 
          onClick={() => {
            if (id === 'new') {
              dispatch(addQuiz(quiz));
            } else {
              dispatch(updateQuiz(quiz));
            }
            navigate(`/Kanbas/Courses/${quiz.course}/Quizzes`);
          }}
        >
          Save
        </button>
      </div>
    </div>
  );
}
