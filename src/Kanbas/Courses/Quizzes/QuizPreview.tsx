import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './QuizPreview.css';
import { RxQuestionMarkCircled } from "react-icons/rx";
import * as client from "./client";

const QuizPreview: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const curUser = useSelector((state: any) => state.accountReducer.currentUser || {});

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [quiz, setQuiz] = useState<any>({});
  const [questions, setQuestions] = useState<any>([]);
  const [curResponse, setCurResponse] = useState<any>({});

  const [score, setScore] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [totalPoints, setTotalPoints] = useState<number>(0);
  const [isAllowedToEdit, setIsAllowedToEdit] = useState<any>(0);

  const isStudent = curUser?.role === 'STUDENT';
  const currentQuestion = questions[currentQuestionIndex] as any;
  const curAnswers = (curResponse?.answers || []).find((as: any) => as.questionId === currentQuestion._id) || {};

  useEffect(() => {
    client.findAllQuizzes().then((quizData: any) => {
      const resQuiz = (quizData.filter((q: any) => q._id === id) || [])[0] || {};
      setQuiz(resQuiz);
      const quizzQuestions= resQuiz?.questions || [];
      setQuestions(quizzQuestions);
      const quizResponse = (resQuiz?.responses || []).find((rs: any) => rs.userId === curUser._id) || {};
      setCurResponse(quizResponse);

      const allowedToEdit = (!!quizResponse.answers && resQuiz?.allowMultipleAttempts) || !quizResponse.answers;      setIsAllowedToEdit(allowedToEdit);
      if (!allowedToEdit) setScore(quizResponse.score || 0);
      const totalPoints = (resQuiz?.questions || []).reduce((acc: number, curr: any) =>
        (acc || 0) + (curr?.points || 0), 0);
      setTotalPoints(totalPoints);
    }).catch((error) => {
      console.error("Failed to fetch quiz data:", error);
    });
  }, [id]);

  const handleAnswerChange = (value: string | number) => {
    if (!curResponse?.answers?.length) {
      setCurResponse({ answers: [{ questionId: currentQuestion._id, answer: value }] });
      return;
    };
    const isEditAnswers = (curResponse?.answers || []).find((as: any) => as.questionId === currentQuestion._id);
    if (isEditAnswers) {
      const curAnswers = (curResponse?.answers || []).map((as: any) => {
        if (as.questionId === currentQuestion._id) {
          as.questionId = currentQuestion._id;
          as.answer = value;
          return as;
        }
        return as;
      });
      setCurResponse({ ...curResponse, answers: curAnswers });
      return;
    };

    const transAnswers = [ ...curResponse?.answers, { questionId: currentQuestion._id, answer: value } ]
    setCurResponse({ ...curResponse, answers: transAnswers });
  };

  const handleSubmit = async () => {
    let correctPoints = 0;
    (curResponse?.answers || []).forEach((cq: any) => {
      const nowQuestion = questions.find((q: any) => q._id === cq.questionId);
      nowQuestion.choices.forEach((c: any) => {
        if (c.text === cq.answer && c.isCorrect) {
          correctPoints += nowQuestion.points;
        }
      });
    });

    const resQuiz = await client.updateQuiz({
      ...quiz,
      responses: { ...curResponse, userId: curUser._id, score: correctPoints, attemptDate: String(Date.now()) }
    });
    if (!/^nothing/.test(resQuiz?.message)){
      setScore(correctPoints);
      setSubmitted(true);
    } else {
      window.alert('nothing changed');
    }
  };

  if (!quiz._id) return <div>Loading...</div>;
  if (!currentQuestion) return <div>not set questions</div>;
  if (submitted && score !== null) {
    return (
      <div className="quiz-result-content">
        <h2>Your Score: {score || 0}/{totalPoints}</h2>
        {!isAllowedToEdit && (
          <p>You have completed the quiz. Multiple attempts are not allowed.</p>
        )}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}>
          <button
            disabled={!isAllowedToEdit}
            style={{ marginRight: 10 }}
            onClick={() => {
              setScore(0);
              setSubmitted(false);
              setCurResponse({});
            }}
          >Retry</button>
          <button onClick={() => navigate(`/Kanbas/Courses/${quiz.course}/Quizzes`)}>Return to Quiz</button>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-preview">
      <div className="quiz-preview-header">
        <div className="quiz-preview-title">
          <h3>{quiz.title}</h3>
          {!isAllowedToEdit && (<i>(Your Score: {score || 0})</i>)}
        </div>
        <div>Started: {new Date().toLocaleString()}</div>
        <h3>Quiz Instructions</h3>
      </div>
      <h1 style={{ textAlign: 'left', borderTop: '1px solid #aaa' }}></h1>

      <div className="question-container">
        <div className="question-header">
          <div className="question-title">
            Question {currentQuestionIndex + 1}
          </div>
          <div className="question-points">
            {currentQuestion.points} pts
          </div>
        </div>
        <div className="question-content" dangerouslySetInnerHTML={{ __html: currentQuestion.content }} />

        <div className="question-options">
          {currentQuestion?.choices.length && /^(Multiple Choice|True\/False)$/.test(currentQuestion.type) ? (
            <div style={{ padding: '20px', borderTop: '2px solid #ddd' }}>
              {currentQuestion.choices.map((choice: any, choiceIndex: number) => (
                <div key={choiceIndex} style={{ display: 'flex', padding: 3 }}>
                  <input
                    type="radio"
                    value={curAnswers.answer || ''}
                    disabled={!isAllowedToEdit}
                    checked={curAnswers.answer === choice?.text}
                    onChange={() => handleAnswerChange(choice?.text || '')}
                    required
                  />
                  <div style={{ marginLeft: 6 }}>{choice?.text}</div>
                </div>
              ))}
            </div>
          ) : (
            <div style={{ display: 'flex', padding: '20px', borderTop: '2px solid #ddd' }}>
              <hr />
              <input
                type="text"
                required
                disabled={!isAllowedToEdit}
                placeholder="Type your answer here"
                value={curAnswers.answer || ''}
                onChange={(e) => handleAnswerChange(e.target.value)}
              />
            </div>
          )}
        </div>
      </div>

      <div className="question-buttons">
        <button
          disabled={currentQuestionIndex <= 0}
          onClick={() => setCurrentQuestionIndex(currentQuestionIndex - 1)}
        >Previous</button>
        <button
          disabled={currentQuestionIndex === questions?.length - 1}
          onClick={() => setCurrentQuestionIndex(currentQuestionIndex + 1)}
        >Next</button>
      </div>

      <div className="question-submitButtons">
        <div style={{ color: '#888' }}>Quiz saved at: {new Date().toLocaleString()}</div>
        <button onClick={() => navigate(-1)}>back</button>
        <button
          disabled={!isStudent || !isAllowedToEdit}
          onClick={() => handleSubmit()}
        >
          Submit Quiz
        </button>
      </div>

      <div className="question-sidebar">
        <h3>Questions</h3>
        {questions.map((q: any, index: number) => (
          <a
            key={index}
            onClick={(e) => {
              e.preventDefault();
              setCurrentQuestionIndex(index);
            }}
            className={index === currentQuestionIndex ? 'active' : ''}
          >
            <RxQuestionMarkCircled />
            Question {index + 1}
          </a>
        ))}
      </div>
    </div>
  );
};

export default QuizPreview;
