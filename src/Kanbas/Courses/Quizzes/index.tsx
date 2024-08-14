import React, { useEffect } from 'react';
import { useParams, Link, Routes, Route, useNavigate } from 'react-router-dom';
import QuizEditor from './Editor';
import { FaSearch, FaCheckCircle, FaEllipsisV, FaTrash, FaTimesCircle, FaRocket } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { addQuiz, deleteQuiz, updateQuiz, setQuizzes } from "./reducer";
import togglePublish from "./reducer";
import * as client from "./client";

export default function Quizzes() {
    const dispatch = useDispatch();
    const { cid } = useParams<{ cid: string }>();
    const quizzes = useSelector((state: any) => state.quizzesReducer ? state.quizzesReducer.quizzes : []);
    const navigate = useNavigate();

    // Fetch quizzes
    const fetchQuizzes = async () => {
        const quizzes = await client.findQuizzesForCourse(cid as string);
        dispatch(setQuizzes(quizzes));
    };

    useEffect(() => {
        fetchQuizzes();
    }, [cid]);

    // Create quiz
    const createQuiz = async () => {
        const quiz = {
            title: "New Quiz",
            course: cid,
        };
        const newQuiz = await client.createQuiz(cid as string, quiz);
        dispatch(addQuiz(newQuiz));
        navigate(`/Kanbas/Courses/${cid}/Quizzes/${newQuiz._id}`);
    };

    // Delete quiz
    const handleDeleteQuiz = async (quizId: string) => {
        await client.deleteQuiz(quizId);
        dispatch(deleteQuiz(quizId));
    };

    // Toggle Publish
    const handleTogglePublishQuiz = (quizId: string) => {
        dispatch({ type: 'TOGGLE_PUBLISH', quizId });
    };

    return (
        <div style={{ width: '100%', margin: '0', fontFamily: 'Arial, sans-serif' }}>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '10px 20px',
                borderBottom: '1px solid #ddd',
                backgroundColor: '#f9f9f9',
                marginBottom: '10px'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
                    <FaSearch style={{ marginRight: '10px' }} />
                    <input 
                        placeholder="Search for Quiz" 
                        style={{
                            width: '100%',
                            padding: '8px',
                            border: '1px solid #ccc',
                            borderRadius: '4px'
                        }}
                    />
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <button 
                        onClick={createQuiz}
                        style={{ 
                            marginLeft: '10px', 
                            backgroundColor: '#dc3545', 
                            color: 'white', 
                            padding: '8px 16px', 
                            borderRadius: '4px', 
                            border: 'none', 
                            cursor: 'pointer' 
                        }}
                    >
                        + Quiz
                    </button>
                    <button 
                        style={{ 
                            marginLeft: '10px', 
                            backgroundColor: '#f8f9fa', 
                            padding: '8px 16px', 
                            borderRadius: '4px', 
                            border: '1px solid #ddd', 
                            cursor: 'pointer' 
                        }}
                    >
                        <FaEllipsisV />
                    </button>
                </div>
            </div>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: '#f1f1f1',
                padding: '10px 20px',
                border: '1px solid #ddd',
                fontWeight: 'bold',
                marginBottom: '10px',
                color: '#333',
                borderLeft: '5px solid #3E9F41'
            }}>
                <span style={{ marginRight: '8px' }}>⯆</span>
                Assignment Quizzes
            </div>
            <ul style={{ listStyleType: 'none', padding: '0' }}>
                {quizzes.filter((q: any) => q.course === cid).map((quiz: any) => (
                    <li key={quiz._id} style={{ padding: '15px', border: '1px solid #ddd', borderRadius: '5px', backgroundColor: '#fff', marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            width: '100%',
                            flexDirection: 'column'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                                <FaRocket style={{ color: '#3E9F41', marginRight: '10px' }} />
                                {quiz.published ? (
                                    <FaCheckCircle 
                                        onClick={() => handleTogglePublishQuiz(quiz._id)} 
                                        style={{ color: '#3E9F41', marginRight: '10px', cursor: 'pointer' }}
                                    />
                                ) : (
                                    <FaTimesCircle 
                                        onClick={() => handleTogglePublishQuiz(quiz._id)} 
                                        style={{ color: '#d9534f', marginRight: '10px', cursor: 'pointer' }}
                                    />
                                )}
                                <Link to={quiz._id} style={{ fontSize: '18px', fontWeight: '600', color: '#333', textDecoration: 'none', marginRight: 'auto' }}>
                                    {quiz.title}
                                </Link>
                                <FaCheckCircle style={{ marginLeft: '10px', cursor: 'pointer', color: '#3E9F41', fontSize: '20px' }} />
                                <FaEllipsisV style={{ marginLeft: '10px', cursor: 'pointer', color: '#888', fontSize: '18px' }} />
                            </div>
                            <div style={{ fontSize: '14px', color: '#555', marginTop: '5px', width: '100%', paddingLeft: '28px' }}>
                                {new Date(quiz.availableDate) > new Date() ? (
                                    `Not available until ${new Date(quiz.availableDate).toLocaleDateString()}`
                                ) : new Date(quiz.untilDate) > new Date() ? (
                                    <strong>Available</strong>
                                ) : (
                                    <strong>Closed</strong>
                                )}
                                | <strong>Due</strong> {new Date(quiz.dueDate).toLocaleDateString()} at 11:59pm | {quiz.points} pts | {quiz.questions?.length || 0} Questions
                            </div>
                        </div>
                    </li>
                ))}
            </ul>

            <Routes>
                <Route path=":id" element={<QuizEditor />} />
                <Route path="new" element={<QuizEditor />} />
            </Routes>
        </div>
    );
}
