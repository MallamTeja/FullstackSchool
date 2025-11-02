import React from 'react';
import { motion } from 'framer-motion';
import './TechCard.css';

const TechCard = ({ tech }) => {
  const handleLearnMore = () => {
    window.open(tech.url, '_blank');
  };

  return (
    <motion.div
      className="tech-card"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="card-inner">
        <div className="card-front">
          <div className="tech-icon">
            <i className={tech.icon}></i>
          </div>
          <h3 className="tech-name">{tech.name}</h3>
          <span className="tech-category">{tech.category}</span>
        </div>
        
        <div className="card-back">
          <div className="tech-description">
            <p>{tech.desc}</p>
          </div>
          <button 
            className="learn-more-btn"
            onClick={handleLearnMore}
          >
            <i className="fas fa-external-link-alt"></i>
            Learn More
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default TechCard;