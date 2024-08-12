// src/Kanbas/store.ts
import { configureStore } from '@reduxjs/toolkit';
import modulesReducer from './Courses/Modules/reducer';
import assignmentsReducer from './Courses/Assignments/reducer'; // Import the assignments reducer
import accountReducer from './Courses/Account/reducer'; // Import the account reducer


const store = configureStore({
  reducer: {
    modulesReducer,
    assignmentsReducer, // Add the assignments reducer
    accountReducer, // Add the account reducer
  },
});

export default store;