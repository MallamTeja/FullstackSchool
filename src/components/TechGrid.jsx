import React from 'react';
import { motion } from 'framer-motion';
import TechCard from './TechCard';
import './TechGrid.css';

const TechGrid = ({ technologies }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  return (
    <motion.div
      className="tech-grid-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="tech-grid">
        {technologies.map((tech) => (
          <TechCard key={tech.id} tech={tech} />
        ))}
      </div>
      
      {technologies.length === 0 && (
        <motion.div
          className="no-results"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <i className="fas fa-search"></i>
          <h3>No technologies found</h3>
          <p>Try adjusting your search or category filter</p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default TechGrid;