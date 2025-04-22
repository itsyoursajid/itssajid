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

function RedirectFromQuery() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const queryPath = queryParams.get('p') || queryParams.get('') || '';
    
    if (queryPath && queryPath !== location.pathname) {
      navigate(queryPath.startsWith('/') ? queryPath : `/${queryPath}`, { 
        replace: true 
      });
    }
  }, [location.pathname, navigate]);

  return null;
}

function App() {
  return (
    <Router>
      <RedirectFromQuery />
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