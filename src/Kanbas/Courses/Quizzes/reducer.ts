//Users/sophiawang/2024/summer/webdev/kanbas-react-web-app/src/Kanbas/Courses/Quizzes/reducer.ts
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    quizzes: [],
};

const quizzesSlice = createSlice({
    name: "quizzes",
    initialState,
    reducers: {
        setQuizzes: (state, action) => {
            state.quizzes = action.payload;
        },
        addQuiz: (state, { payload: quiz }) => {
            state.quizzes = [
                ...state.quizzes,
                { _id: Date.now().toString(), ...quiz },
            ] as any;
        },
        deleteQuiz: (state, { payload: quizId }) => {
            state.quizzes = state.quizzes.filter(
                (q: any) => q._id !== quizId
            );
        },
        updateQuiz: (state, { payload: quiz }) => {
            state.quizzes = state.quizzes.map((q: any) =>
                q._id === quiz._id ? quiz : q
            ) as any;
        },
    },
});

export const {
    setQuizzes,
    addQuiz,
    deleteQuiz,
    updateQuiz,
} = quizzesSlice.actions;
export default quizzesSlice.reducer;
