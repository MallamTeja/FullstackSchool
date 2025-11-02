import React from 'react';
import { motion } from 'framer-motion';
import './HeroSection.css';

const HeroSection = () => {
  const handleCTA = () => {
    // navigate to roadmap page
    window.location.href = '/roadmap';
  };

  return (
    <section className="hero-section-landing">
      <div className="hero-inner app-container">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="hero-tag">Short, friendly tagline for curious devs</p>
          <h1 className="hero-title">Build Projects Like a Pro</h1>
          <p className="hero-desc">Interactive roadmaps, visual tech trees, and flip cards that turn confusion into code. Learn the why, then the how.</p>

          <div className="hero-ctas">
            <motion.button
              className="btn btn-primary"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleCTA}
              aria-label="Take a Look"
            >
              Take a Look
            </motion.button>

            <motion.a
              className="btn btn-secondary"
              href="#preview"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Sneak Peek
            </motion.a>
          </div>

          <p className="microcopy">Where confused devs get unconfused. (Yes, really.)</p>
        </motion.div>

        <motion.div
          className="hero-mock"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.12 }}
        >
          <div className="mock-canvas">
            <div className="mock-column">
              <div className="mock-card">
                <div className="mock-icon">⚛️</div>
                <div className="mock-name">React</div>
              </div>
            </div>

            <div className="mock-connector" />

            <div className="mock-column">
              <div className="mock-card small">Node</div>
              <div className="mock-card small">Express</div>
              <div className="mock-card small">Postgres</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
