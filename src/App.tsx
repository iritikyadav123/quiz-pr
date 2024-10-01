import { Route, Routes, useLocation } from 'react-router-dom';
import LandingPage from './component/Landinpage';
import QuizBuilder from './component/QuizBuilder';
import Navbar from './component/Navbar';
import UserPage from './component/UserPage';

const App = () => {
  const location = useLocation();
  return (
    <div>
        {/* Conditionally render Navbar, hide it on the QuizBuilder page */}
        {location.pathname !== '/quiz' && <Navbar />}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/quiz" element={<QuizBuilder />} />
          <Route path="/user" element={<UserPage />} />
        </Routes>
    </div>
  );
};

export default App;
