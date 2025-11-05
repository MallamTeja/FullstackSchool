import React from 'react';
import { motion } from 'framer-motion';
import './HowItWorks.css';

const STEPS = [
  { id: 1, title: 'Choose Your Goal', desc: 'Select frontend, backend, fullstack, or specialized paths' },
  { id: 2, title: 'Follow the Visual Path', desc: 'See exactly which technologies lead to others' },
  { id: 3, title: 'Learn & Practice', desc: 'Interactive cards with resources and real examples' }
];

const HowItWorks = () => {
  return (
    <section id="how" className="how-section app-container">
      <div className="how-inner">
        <h2>How It Works</h2>
        <p className="lead">Interactive tech tree that reveals dependencies, shows real-world connections, and guides you through the optimal learning sequence for any stack.</p>

        <div className="steps-grid">
          {STEPS.map((s, index) => (
            <motion.div 
              key={s.id} 
              className="step-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1, 
                ease: [0.25, 0.46, 0.45, 0.94] 
              }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="step-num">{s.id}</div>
              <div className="step-body">
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
