import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './TechCard.css';

const TechCard = ({ tech }) => {
  const [flipped, setFlipped] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Detect touch / coarse pointer devices
    const mq = typeof window !== 'undefined' && window.matchMedia
      ? window.matchMedia('(hover: none) and (pointer: coarse)')
      : null;
    const touch = (navigator && navigator.maxTouchPoints && navigator.maxTouchPoints > 0) || (mq && mq.matches) || ('ontouchstart' in window);
    setIsTouch(Boolean(touch));
  }, []);

  const openOfficial = () => {
    if (tech?.url) window.open(tech.url, '_blank', 'noopener');
  };

  const openDetails = () => {
    window.location.href = `/tech/${tech.id}`;
  };

  const handleCardClick = () => {
    // Touch: toggle flip; Desktop: open details page
    if (isTouch) {
      setFlipped((s) => !s);
    } else {
      openDetails();
    }
  };

  return (
    <motion.div
      className="tech-card"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      onClick={handleCardClick}
      role="button"
      tabIndex={0}
      aria-label={`Open details for ${tech.name}`}
    >
      <div className={`card-inner ${flipped ? 'is-flipped' : ''}`}>
        <div className="card-front">
          <div className="tech-icon">
            <img src={tech.iconUrl} alt={tech.name} />
          </div>
          <h3 className="tech-name">{tech.name}</h3>
          <span className="tech-category">{tech.category}</span>
        </div>
        
        <div className="card-back">
          <div className="tech-description">
            <p>{tech.desc}</p>
          </div>

          {(Array.isArray(tech.dependencies) && tech.dependencies.length > 0) && (
            <div className="tech-meta">
              <span className="meta-label">Depends on:</span>
              <div className="chips">
                {tech.dependencies.map((d) => (<span key={d} className="chip chip-dep">{d}</span>))}
              </div>
            </div>
          )}

          {(Array.isArray(tech.leads_to) && tech.leads_to.length > 0) && (
            <div className="tech-meta">
              <span className="meta-label">Leads to:</span>
              <div className="chips">
                {tech.leads_to.map((d) => (<span key={d} className="chip chip-leads">{d}</span>))}
              </div>
            </div>
          )}

          <div className="card-actions">
            <button
              className="btn-ghost"
              onClick={(ev) => { ev.stopPropagation(); openDetails(); }}
            >
              <i className="fas fa-layer-group"></i>
              View Details
            </button>
            <button
              className="learn-more-btn"
              onClick={(ev) => { ev.stopPropagation(); openOfficial(); }}
            >
              <i className="fas fa-external-link"></i>
              Official Site
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TechCard;