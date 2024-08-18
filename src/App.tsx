//App.tsx
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import Kanbas from "./Kanbas";
import LandingPage from "./LandingPage";
import Labs from "./Labs";
import Courses from "./Kanbas/Courses"; // Import Courses component
import QuizPreview from "./Kanbas/Courses/Quizzes/QuizPreview";
import QuizDetailPreview from "./Kanbas/Courses/Quizzes/QuizDetailPreview";

function App() {

  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/LandingPage" />} />
          <Route path="/Kanbas/*" element={<Kanbas />} />
          <Route path="/LandingPage" element={<LandingPage />} />
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kanbas/Courses/:cid/*" element={<Courses />} /> {/* Include course ID in the route and pass courses */}
          <Route path="/quiz-preview/:id" element={<QuizPreview />} />
          <Route path="/quiz-detail-preview/:id" element={<QuizDetailPreview />} />
        </Routes>
        <a href="https://github.com/thisissophiawang/kanbas-react-web-app/tree/a1">Github</a>
      </div>
    </HashRouter>
  );
}

export default App;
