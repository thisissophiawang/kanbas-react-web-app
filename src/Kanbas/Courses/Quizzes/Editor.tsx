import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addQuiz, updateQuiz } from './reducer';
import * as client from './client';
import './Editor.css';  // Import the CSS file
import QuestionEditor from './QuestionEditor';  // Import the QuestionEditor component

interface question {
  content: string;
  title: string;
  type: string;
  points: number;
  choices?: any;
}

//include the QuestionEditor component in the QuizEditor component
export default function QuizEditor() {
  const { id, cid } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { quizzes } = useSelector((state: any) => state.quizzesReducer);
  const [quiz, setQuiz] = useState<any>(null);
  const [activeTab, setActiveTab] = useState('details');

  //add question state
  const [questions, setQuestions] = useState<any[]>([]);

  useEffect(() => {
    if (id === 'new') {
      setQuiz({
        title: 'New Quiz',
        description: '',
        type: 'Graded Quiz',
        points: 0,
        assignmentGroup: 'Quizzes',
        shuffleAnswers: true,
        allowMultipleAttempts: false,
        showCorrectAnswers: false,
        oneQuestionAtATime: true,
        webcamRequired: false,
        lockQuestionsAfterAnswering: false,
        timeLimit: 20,
        accessCode: '',
        dueDate: '',
        availableDate: '',
        untilDate: '',
        course: cid,
      });
    } else {
      const foundQuiz = quizzes.find((q: any) => q._id === id);
      setQuiz(foundQuiz);
      setQuestions(foundQuiz?.questions || []);
    }
  }, [id, quizzes, cid]);

  const saveQuiz = async (mode: string) => {
    const points = (quiz?.questions || questions).reduce((acc: number, curr: question) =>
      (acc || 0) + (curr?.points || 0), 0);

    if (id === 'new') {
      const resQuiz = await client.createQuiz(cid as string, { ...quiz, questions, points });
      if (!quiz._id || quiz._id === 'new') quiz._id = resQuiz._id;
      dispatch(addQuiz(resQuiz));
    } else {
      const resQuiz = await client.updateQuiz({ ...quiz, questions, points });
      if (!/^nothing/.test(resQuiz?.message)){
        dispatch(updateQuiz(resQuiz));
      }
      // else {
      //   window.alert('nothing changed');
      //   return;
      // }
    }

    if (/preview$/.test(mode)) {
      navigate(`/quiz-${mode}/${quiz._id}`);
    } else {
      navigate(`/Kanbas/Courses/${quiz.course}/Quizzes`);
    }
  };

  if (!quiz) {
    return <div>Loading...</div>;
  }

  return (
    <div className="editor-container">
      <div className="editor-tabs">
        <button
          className={activeTab === 'details' ? 'active' : ''}
          onClick={() => setActiveTab('details')}
        >
          Details
        </button>
        <button
          className={activeTab === 'questions' ? 'active' : ''}
          onClick={() => setActiveTab('questions')}
        >
          Questions
        </button>
      </div>

      {activeTab === 'details' && (
        <div className="editor-form">
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
            <label htmlFor="wd-description">Quiz Description</label>
            <textarea
              id="wd-description"
              className="form-control"
              value={quiz.description}
              onChange={(e) => setQuiz({ ...quiz, description: e.target.value })}
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
            <label htmlFor="wd-assignment-group">Assignment Group</label>
            <select
              id="wd-assignment-group"
              className="form-control"
              value={quiz.assignmentGroup}
              onChange={(e) => setQuiz({ ...quiz, assignmentGroup: e.target.value })}
            >
              <option value="Quizzes">Quizzes</option>
              <option value="Exams">Exams</option>
              <option value="Assignments">Assignments</option>
              <option value="Project">Project</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="wd-points">Points</label>
            <input
              id="wd-points"
              className="form-control"
              type="number"
              disabled
              value={(quiz?.questions || questions).reduce((acc: number, curr: question) =>
                (acc || 0) + (curr?.points || 0), 0)
              }
              // onChange={(e) => setQuiz({ ...quiz, points: Number(e.target.value) })}
            />
          </div>

          <div className="form-group">
            <h3>Options</h3>
            <div className="option-group">
              <input
                type="checkbox"
                checked={quiz.shuffleAnswers}
                onChange={(e) => setQuiz({ ...quiz, shuffleAnswers: e.target.checked })}
              />
              <label>Shuffle Answers</label>
            </div>

            <div className="option-group">
              <input
                type="checkbox"
                checked={quiz.allowMultipleAttempts}
                onChange={(e) => setQuiz({ ...quiz, allowMultipleAttempts: e.target.checked })}
              />
              <label>Allow Multiple Attempts</label>
            </div>

            <div className="option-group">
              <input
                type="checkbox"
                checked={quiz.showCorrectAnswers}
                onChange={(e) => setQuiz({ ...quiz, showCorrectAnswers: e.target.checked })}
              />
              <label>Show Correct Answers</label>
            </div>

            <div className="option-group">
              <input
                type="checkbox"
                checked={quiz.oneQuestionAtATime}
                onChange={(e) => setQuiz({ ...quiz, oneQuestionAtATime: e.target.checked })}
              />
              <label>One Question at a Time</label>
            </div>

            <div className="option-group">
              <input
                type="checkbox"
                checked={quiz.webcamRequired}
                onChange={(e) => setQuiz({ ...quiz, webcamRequired: e.target.checked })}
              />
              <label>Webcam Required</label>
            </div>

            <div className="option-group">
              <input
                type="checkbox"
                checked={quiz.lockQuestionsAfterAnswering}
                onChange={(e) => setQuiz({ ...quiz, lockQuestionsAfterAnswering: e.target.checked })}
              />
              <label>Lock Questions After Answering</label>
            </div>

            <div className="form-group">
              <label htmlFor="wd-time-limit">Time Limit (minutes)</label>
              <input
                id="wd-time-limit"
                className="form-control"
                type="number"
                value={quiz.timeLimit}
                // step={20}
                onChange={(e) => setQuiz({ ...quiz, timeLimit: Number(e.target.value) })}
              />
            </div>

            <div className="form-group">
              <label htmlFor="wd-access-code">Access Code</label>
              <input
                id="wd-access-code"
                className="form-control"
                type="text"
                value={quiz.accessCode}
                onChange={(e) => setQuiz({ ...quiz, accessCode: e.target.value })}
              />
            </div>
          </div>

          <div className="form-group">
            <h3>Assign</h3>
            <div className="assign-group">
              <div className='Everyone'>
                Assign to
                <input
                  value="Everyone"
                  readOnly
                />
              </div>

              <div className='dueDate'>
                Due
                <input
                  type="date"
                  pattern="yyyy-MM-dd"
                  value={quiz.dueDate || ''}
                  onChange={(e) => setQuiz({ ...quiz, dueDate: e.target.value })}
                />
              </div>

              <div className='availableDate'>
                available date
                <input
                  type="date"
                  pattern="yyyy-MM-dd"
                  value={quiz.availableDate || ''}
                  onChange={(e) => setQuiz({ ...quiz, availableDate: e.target.value })}
                />
              </div>

              <div className='untilDate'>
                Until
                <input
                  type="date"
                  pattern="yyyy-MM-dd"
                  value={quiz.untilDate || ''}
                  onChange={(e) => setQuiz({ ...quiz, untilDate: e.target.value })}
                />
              </div>
            </div>
          </div>

          <div className="form-group btn-container">
            <button onClick={() => saveQuiz('detail-preview')} className="btn btn-primary save-btn">
              Detail
            </button>
            <Link
              to={`/Kanbas/Courses/${quiz.course}/Quizzes`}
              className="btn btn-secondary"
            >
              Cancel
            </Link>
            <button
              className="btn btn-danger"
              onClick={() => saveQuiz('')}
            >
              Save
            </button>
          </div>
        </div>
      )}


      {activeTab === 'questions' && (
        <>
          <QuestionEditor
            questions={questions}
            setQuestions={setQuestions}
            handleSaveAndPreview={() => saveQuiz('preview')}
          />
          <div className="form-group btn-container">
            <Link
              to={`/Kanbas/Courses/${quiz.course}/Quizzes`}
              className="btn btn-secondary"
            >
              Cancel
            </Link>
            <button
              className="btn btn-danger"
              onClick={() => saveQuiz('')}
            >
              Save
            </button>
        </div>
        </>
      )}
    </div>
  );
}
