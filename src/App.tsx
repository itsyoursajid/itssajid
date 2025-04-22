import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useNavigate
} from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';

function RedirectHandler() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Check for redirect path in sessionStorage
    const redirectPath = sessionStorage.getItem('redirectPath');
    if (redirectPath) {
      sessionStorage.removeItem('redirectPath');
      if (redirectPath !== location.pathname + location.search + location.hash) {
        navigate(redirectPath, { replace: true });
      }
    }
  }, [navigate, location]);

  return null;
}

function App() {
  return (
    <Router>
      <RedirectHandler />
      <div className="min-h-screen bg-gray-900 text-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;