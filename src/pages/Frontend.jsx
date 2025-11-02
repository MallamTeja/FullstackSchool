import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SearchBar from '../components/SearchBar';
import CategorySelector from '../components/CategorySelector';
import TechGrid from '../components/TechGrid';
import techData from '../data/techlist.json';

const Frontend = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Frontend');
  const [filteredTechnologies, setFilteredTechnologies] = useState([]);

  useEffect(() => {
    let filtered = techData.technologies.filter(tech => tech.category === 'Frontend');
    
    if (searchTerm) {
      filtered = filtered.filter(tech =>
        tech.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tech.desc.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    setFilteredTechnologies(filtered);
  }, [searchTerm]);

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
            Frontend Technologies
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#94a3b8', maxWidth: '600px', margin: '0 auto' }}>
            Master the client-side technologies that create beautiful, interactive user experiences
          </p>
        </motion.div>

        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <TechGrid technologies={filteredTechnologies} />
      </div>
    </motion.div>
  );
};

export default Frontend;