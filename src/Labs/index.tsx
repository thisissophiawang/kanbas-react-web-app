///Users/sophiawang/2024/summer/webdev/kanbas-react-web-app/src/Labs/index.tsx

import React from 'react';
import { Route, Routes, Navigate } from 'react-router';
import Lab1 from './Lab1';
import Lab2 from './Lab2';
import Lab3 from './Lab3';
import Lab4 from './Lab4';
import TOC from './TOC';
import store from './store';
import { Provider } from 'react-redux';

const Labs: React.FC = () => {
  return (
    <Provider store={store}>
    <div>
      <h1>Xinyi Wang/Sophia</h1>
      <h1>Labs</h1>
      <TOC />
      <Routes>
        <Route path="/" element={<Navigate to="Lab1" />} />
        <Route path="Lab1" element={<Lab1 />} />
        <Route path="Lab2" element={<Lab2 />} />
        <Route path="Lab3/*" element={<Lab3 />} />
        <Route path="Lab4/*" element={<Lab4 />} />
      </Routes>
      <a href="https://github.com/thisissophiawang/kanbas-react-web-app/tree/a1">Github</a>
    </div>
    </Provider>

  );
}

export default Labs;
