// src/Kanbas/store.ts
import { configureStore } from '@reduxjs/toolkit';
import modulesReducer from './Courses/Modules/reducer';

const store = configureStore({
  reducer: {
    modules: modulesReducer,
  },
});

export default store;
