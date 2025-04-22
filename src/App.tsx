import { BrowserRouter as Router, Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import ScrollToTop from './components/ScrollToTop';

function RedirectFromQuery() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const queryPath = window.location.search.replace('?', '');
    if (queryPath && queryPath !== location.pathname) {
      navigate(queryPath, { replace: true });
    }
  }, []);

  return null;
}

function App() {
  return (
    <Router>
      <RedirectFromQuery />
      <ScrollToTop />
      <div className="min-h-screen bg-gray-900 text-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
