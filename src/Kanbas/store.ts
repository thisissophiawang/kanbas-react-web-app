// src/Kanbas/store.ts
import { configureStore } from '@reduxjs/toolkit';
import modulesReducer from './Courses/Modules/reducer';
import assignmentsReducer from './Courses/Assignments/reducer'; // Import the assignments reducer

const store = configureStore({
  reducer: {
    modules: modulesReducer,
    assignments: assignmentsReducer, // Add the assignments reducer
  },
});

export default store;
