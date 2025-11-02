import React from 'react';
import { motion } from 'framer-motion';
import './HowItWorks.css';

const steps = [
  { title: 'Select Track', desc: 'Pick Frontend, Backend, Database or Infra.' },
  { title: 'View Tech Tree', desc: 'See dependencies so you learn in the right order.' },
  { title: 'Flip Cards', desc: 'Read quick descriptions and open resources.' },
  { title: 'Build Stuff', desc: 'Follow projects to cement knowledge.' }
];

const HowItWorks = () => {
  return (
    <section id="how" className="how-section">
      <div className="app-container">
        <motion.div className="how-inner" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <h2>How it works</h2>
          <div className="steps-grid">
            {steps.map((s, i) => (
              <motion.div key={s.title} className="step-card" whileHover={{ y: -6 }} transition={{ type: 'spring', stiffness: 200 }}>
                <div className="step-num">{i + 1}</div>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
