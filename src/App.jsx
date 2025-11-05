import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Components
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import SearchBar from './components/SearchBar';
import CategorySelector from './components/CategorySelector';
import TechGrid from './components/TechGrid';
import TechTree from './components/TechTree';
import Footer from './components/Footer';
import TechDetail from './pages/TechDetail';

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
      const q = searchTerm.toLowerCase();
      filtered = filtered.filter((tech) => {
        // name, short description (desc), category
        const nameMatch = tech.name && tech.name.toLowerCase().includes(q);
        const descMatch = tech.desc && tech.desc.toLowerCase().includes(q);
        const categoryMatch = tech.category && tech.category.toLowerCase().includes(q);

        // dependencies and leads_to arrays
        const deps = Array.isArray(tech.dependencies) ? tech.dependencies.join(' ').toLowerCase() : '';
        const leads = Array.isArray(tech.leads_to) ? tech.leads_to.join(' ').toLowerCase() : '';
        const depsMatch = deps.includes(q);
        const leadsMatch = leads.includes(q);

        return nameMatch || descMatch || categoryMatch || depsMatch || leadsMatch;
      });
    }

    setFilteredTechnologies(filtered);
  }, [searchTerm, selectedCategory]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <LandingPage setCurrentPage={setCurrentPage} />;
      
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
        return <TechTree />;

      default:
        return <LandingPage />;
    }
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar 
          currentPage={currentPage} 
          setCurrentPage={setCurrentPage} 
          searchTerm={searchTerm} 
          setSearchTerm={setSearchTerm} 
        />

        <Routes>
          <Route path="/" element={
            <AnimatePresence mode="wait">{renderPage()}</AnimatePresence>
          } />
          <Route path="/tech/:id" element={<TechDetail />} />
        </Routes>

        {currentPage !== 'home' && <Footer />}
      </div>
    </BrowserRouter>
  );
}

export default App;