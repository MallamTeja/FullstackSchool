import React from 'react';
import { motion } from 'framer-motion';
import './CategoryButtons.css';

const CategoryButtons = ({ selectedCategory, onCategoryChange }) => {
  const categories = [
    { key: 'All', label: 'All Technologies', icon: 'fas fa-th' },
    { key: 'Frontend', label: 'Frontend', icon: 'fab fa-react' },
    { key: 'Backend', label: 'Backend', icon: 'fas fa-server' },
    { key: 'Database', label: 'Database', icon: 'fas fa-database' },
    { key: 'DevOps', label: 'DevOps', icon: 'fas fa-tools' },
    { key: 'AWS', label: 'AWS', icon: 'fab fa-aws' },
    { key: 'Messaging', label: 'Messaging', icon: 'fas fa-comments' },
    { key: 'CI/CD', label: 'CI/CD', icon: 'fas fa-sync-alt' },
    { key: 'Observability', label: 'Observability', icon: 'fas fa-eye' },
    { key: 'Realtime', label: 'Realtime', icon: 'fas fa-bolt' },
    { key: 'Blockchain', label: 'Blockchain', icon: 'fab fa-bitcoin' },
    { key: 'AI / ML', label: 'AI / ML', icon: 'fas fa-brain' },
    { key: 'Deployment', label: 'Deployment', icon: 'fas fa-rocket' }
  ];

  return (
    <div className="category-buttons-container">
      <div className="category-buttons-wrapper">
        <div className="category-scroll">
          {categories.map((category) => (
            <motion.button
              key={category.key}
              className={`category-btn ${selectedCategory === category.key ? 'active' : ''}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onCategoryChange(category.key)}
            >
              <i className={category.icon}></i>
              <span>{category.label}</span>
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryButtons;