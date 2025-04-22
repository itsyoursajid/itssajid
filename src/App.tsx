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

function HashRedirect() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Check if the URL has a hash (from our 404 redirect)
    if (window.location.hash) {
      const hashPath = window.location.hash.substring(1); // Remove the #
      
      // Only navigate if the hash path is different from current path
      if (hashPath !== location.pathname) {
        navigate(hashPath, { replace: true });
      }
      
      // Remove the hash from URL
      window.history.replaceState(null, '', window.location.pathname);
    }
  }, [navigate, location.pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <HashRedirect />
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