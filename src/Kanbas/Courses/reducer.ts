//Users/sophiawang/2024/summer/webdev/kanbas-react-web-app/src/Kanbas/Courses/Quizzes/reducer.ts
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    courses: [],
};

const coursesSlice = createSlice({
    name: "courses",
    initialState,
    reducers: {
        setCourses: (state, action) => {
            state.courses = action.payload;
        },
        addCourses: (state, { payload }) => {
            state.courses = [
                ...state.courses,
                ...payload,
            ] as any;
        },
        deleteCourses: (state, { payload: courseId }) => {
            state.courses = state.courses.filter(
                (q: any) => q._id !== courseId
            );
        },
        updateCourses: (state, { payload }) => {
            state.courses = state.courses.map((q: any) =>
                q._id === payload._id ? payload : q
            ) as any;
        },
    },
});

export const {
    setCourses,
    addCourses,
    deleteCourses,
    updateCourses,
} = coursesSlice.actions;
export default coursesSlice.reducer;
