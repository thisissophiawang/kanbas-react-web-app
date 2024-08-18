//quiz preview page
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaPencilAlt } from "react-icons/fa";
import * as client from "./client";

const blooeanArr = [
  'shuffleAnswers',
  'allowMultipleAttempts',
  'showCorrectAnswers',
  'oneQuestionAtATime',
  'webcamRequired',
  'lockQuestionsAfterAnswering',
];

const DetailArr1 = [
  {
    label: 'Quiz Type',
    key: 'type',
    value: 'Graded Quiz'
  },
  {
    label: 'Points',
    key: 'points',
    value: '0'
	},
  {
    label: 'Assignment Group',
    key: 'assignmentGroup',
    value: 'QUIZZES'
	},
  {
    label: 'Shuffle Answers',
    key: 'shuffleAnswers',
    value: 'No'
	},
  {
    label: 'Time Limit',
    key: 'timeLimit',
    value: '30'
	},
  {
    label: 'Multiple Attempts',
    key: 'allowMultipleAttempts',
    value: 'No'
	},
  // {
  //   label: 'View Responses',
  //   key: '', //
  //   value: 'Always'
	// },
  {
    label: 'Show Correct Answers',
    key: 'showCorrectAnswers',
    value: 'Immediately'
	},
	{
	  label: 'Access Code',
	  key: 'accessCode',
	  value: ''
	},
  {
    label: 'One Question at a Time',
    key: 'oneQuestionAtATime',
    value: 'Yes'
	},
  // {
  //   label: 'Require Respondes LockDown',
  //   key: '', //
  //   value: 'No'
	// },
  // {
  //   label: 'browser',
  //   key: '', //
  //   value: ''
	// },
  {
    label: 'Require to View Quiz Resdffds',
    key: '',
    value: 'No'
	},
  {
    label: 'Webcam Required',
    key: 'webcamRequired',
    value: 'No'
	},
  {
    label: 'Lock Question After Answering',
    key: 'lockQuestionsAfterAnswering',
    value: 'No'
	},
];

const DetailArr2 = [
  {
    label: 'Due',
    key: 'dueDate', // 用来匹配quiz数据集中的字段
    value: 'Sep 21 at 1pm'
  },
  {
    label: 'For',
    key: '',
    value: 'Everyone'
  },
  {
    label: 'Available From',
    key: 'availableDate',
    value: 'Sep 21 at 11:40am'
  },
  {
    label: 'Until',
    key: 'untilDate',
    value: 'Sep 21 at 1pm'
  },
];

const QuizPreview: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [quiz, setQuiz] = useState<any>(null);
  const curUser = useSelector((state: any) => state.accountReducer.currentUser || {});
  const isStudent = curUser?.role === 'STUDENT';

  useEffect(() => {
    client.findAllQuizzes().then((quizData: any) => {
      const resQuiz = (quizData.filter((q: any) => q._id === id) || [])[0] || {};
      setQuiz(resQuiz);
    }).catch((error) => {
      console.error("Failed to fetch quiz data:", error);
    });
  }, [id]);

  const translateQuizVal = (da: any) => {
    if (blooeanArr.find((b: string) => b === da.key)) return quiz[da.key] ? 'YES' : 'NO';
    if ('timeLimit' === da.key) return `${quiz[da.key] || da.value} Minutes`;
    return quiz[da.key] || da.value;
	};

  if (!quiz) return <div>Loading...</div>;
  return (
    <div>
      <div style={{ display: 'flex', justifyItems: 'center', justifyContent: 'center' }}>
        <button
          className="btn"
          onClick={() => navigate(`/quiz-preview/${quiz._id}`)}
        >
          {isStudent ? <><FaPencilAlt /> Start Quiz</> : 'Preview'}
        </button>
        <button className="btn" onClick={() => navigate(-1)}>
          {isStudent ? 'back' : <><FaPencilAlt /> Edit</>}
        </button>
      </div>
      <h1 style={{ textAlign: 'left', borderTop: '1px solid #aaa' }}>{quiz.title}</h1>

      {DetailArr1.map((da: any) => (
        <div style={{ display: 'flex', justifyContent: 'flex-start', width: '100%', lineHeight: '14px', height: '24px' }}>
          <label style={{ flex: 1, textAlign: 'right', marginRight: 6 }}>{da.label}</label>
          <p style={{ flex: 1 }}>
            {translateQuizVal(da)}
          </p>
        </div>
      ))}

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', marginTop: 6 }}>
        {DetailArr2.map((da2: any) => (
          <div style={{ textAlign: 'center' }}>
            <label style={{ width: '100%', borderBottom: '1px solid #aaa' }}>{da2.label}</label>
            <p style={{ borderBottom: '1px solid #aaa' }}>{quiz[da2.key] || da2.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizPreview;
