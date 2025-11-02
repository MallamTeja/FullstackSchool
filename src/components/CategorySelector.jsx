import React from 'react';
import { motion } from 'framer-motion';
import './CategorySelector.css';

const CategorySelector = ({ categories, selectedCategory, setSelectedCategory }) => {
  return (
    <motion.div
      className="category-selector"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="category-scroll-container">
        <div className="category-buttons">
          <motion.button
            className={`category-btn ${selectedCategory === 'All' ? 'active' : ''}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedCategory('All')}
          >
            <i className="fas fa-th"></i>
            All Technologies
          </motion.button>
          
          {categories.map((category) => (
            <motion.button
              key={category}
              className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
            >
              <i className={getCategoryIcon(category)}></i>
              {category}
            </motion.button>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const getCategoryIcon = (category) => {
  const iconMap = {
    'Frontend': 'fas fa-display',
    'Backend': 'fas fa-server',
    'Database': 'fas fa-database',
    'APIs': 'fas fa-arrows-rotate',
    'Authentication': 'fas fa-shield-halved',
    'Cloud & DevOps': 'fas fa-cloud',
    'CI/CD': 'fas fa-cogs',
    'Version Control': 'fab fa-git-alt',
    'Deployment': 'fas fa-rocket',
    'Payment Systems': 'fas fa-credit-card',
    'Blockchain': 'fab fa-bitcoin',
    'AI / ML': 'fas fa-brain'
  };
  return iconMap[category] || 'fas fa-code';
};

export default CategorySelector;