import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Components
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import SearchBar from './components/SearchBar';
import CategorySelector from './components/CategorySelector';
import TechGrid from './components/TechGrid';
import Footer from './components/Footer';

// Data
import techData from './data/techlist.json';

// Styles
import './styles/globals.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredTechnologies, setFilteredTechnologies] = useState(techData.technologies);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 100,
    });
  }, []);

  useEffect(() => {
    let filtered = techData.technologies;

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(tech => tech.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(tech =>
        tech.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tech.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tech.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredTechnologies(filtered);
  }, [searchTerm, selectedCategory]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <LandingPage />;
      
      case 'frontend':
      case 'backend':
      case 'database':
      case 'infrastructure':
        return (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            style={{ paddingTop: '90px', minHeight: '100vh' }}
          >
            <div className="container">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="page-header"
                style={{ textAlign: 'center', padding: '3rem 0 2rem' }}
              >
                <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: '#ffffff' }}>
                  {currentPage.charAt(0).toUpperCase() + currentPage.slice(1)} Technologies
                </h1>
                <p style={{ fontSize: '1.2rem', color: '#94a3b8', maxWidth: '600px', margin: '0 auto' }}>
                  Explore the essential {currentPage} technologies that power modern applications
                </p>
              </motion.div>

              <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
              <CategorySelector
                categories={techData.categories}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
              />
              <TechGrid technologies={filteredTechnologies} />
            </div>
          </motion.div>
        );

      case 'techtree':
        return (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            style={{ paddingTop: '90px', minHeight: '100vh' }}
          >
            <div className="container">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="page-header"
                style={{ textAlign: 'center', padding: '3rem 0' }}
              >
                <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: '#ffffff' }}>
                  Technology Dependency Tree
                </h1>
                <p style={{ fontSize: '1.2rem', color: '#94a3b8', maxWidth: '600px', margin: '0 auto' }}>
                  Visualize how technologies connect and build upon each other
                </p>
              </motion.div>
              
              <div style={{ 
                background: 'rgba(30, 41, 59, 0.8)', 
                borderRadius: '20px', 
                padding: '3rem', 
                textAlign: 'center',
                border: '1px solid rgba(0, 255, 255, 0.2)'
              }}>
                <i className="fas fa-project-diagram" style={{ fontSize: '4rem', color: '#64ffda', marginBottom: '2rem' }}></i>
                <h3 style={{ marginBottom: '1rem', color: '#ffffff' }}>Interactive Tech Tree Coming Soon!</h3>
                <p style={{ color: '#94a3b8', marginBottom: '2rem' }}>
                  We're building an interactive visualization that will show you exactly how technologies connect and depend on each other.
                </p>
                <button 
                  className="btn-primary" 
                  style={{ padding: '1rem 2rem', borderRadius: '50px' }}
                  onClick={() => setCurrentPage('home')}
                >
                  <i className="fas fa-home"></i>
                  Back to Home
                </button>
              </div>
            </div>
          </motion.div>
        );

      default:
        return <LandingPage />;
    }
  };

  return (
    <div className="App">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      <AnimatePresence mode="wait">
        {renderPage()}
      </AnimatePresence>

      {currentPage !== 'home' && <Footer />}
    </div>
  );
}

export default App;