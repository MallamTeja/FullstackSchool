import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Navbar.css';

const Navbar = ({ currentPage, setCurrentPage, searchTerm, setSearchTerm }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // close mobile menu when route changes
    setOpen(false);
  }, [currentPage]);
  
  const navItems = [
    { key: 'frontend', label: 'FullstackSchool', icon: 'fas fa-code' },
    { key: 'techtree', label: 'Tech Tree', icon: 'fas fa-project-diagram' }
  ];

  const showSearch = currentPage === 'techtree';

  return (
    <motion.nav 
      className="navbar"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="nav-container">
        <div className="nav-brand" onClick={() => setCurrentPage('frontend')} role="button" tabIndex={0} aria-label="Go to frontend">
          <div>
            <i className="fas fa-code" aria-hidden></i>
            <span>FullstackSchool</span>
          </div>
          <small className="tagline">Where confused devs get unconfused</small>
        </div>
        
        {/* Search Bar in Header */}
        {showSearch && (
          <div className="nav-search">
            <div className="nav-search-box">
              <i className="fas fa-search nav-search-icon"></i>
              <input
                type="text"
                className="nav-search-input"
                placeholder="Search technologies... (e.g., React, Python, Docker)"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {searchTerm && (
                <button
                  className="nav-clear-search"
                  onClick={() => setSearchTerm('')}
                >
                  <i className="fas fa-times"></i>
                </button>
              )}
            </div>
          </div>
        )}
        
        <div className="nav-menu">
          {navItems.filter(item => 
            item.key !== currentPage && 
            item.key !== 'frontend' && 
            item.key !== 'home' &&
            !(currentPage === 'home' && item.key === 'techtree')
          ).map((item) => (
            <motion.div
              key={item.key}
              className={`nav-item ${currentPage === item.key ? 'active' : ''}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentPage(item.key)}
              role="link"
              tabIndex={0}
              aria-label={item.label}
            >
              <i className={item.icon}></i>
              <span>{item.label}</span>
            </motion.div>
          ))}
        </div>
        
        <div className="nav-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle menu">
          <i className="fas fa-bars"></i>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <div className={`nav-mobile ${open ? 'open' : ''}`} role="menu" aria-hidden={!open}>
        {showSearch && (
          <div className="nav-mobile-search">
            <div className="nav-search-box">
              <i className="fas fa-search nav-search-icon"></i>
              <input
                type="text"
                className="nav-search-input"
                placeholder="Search technologies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {searchTerm && (
                <button
                  className="nav-clear-search"
                  onClick={() => setSearchTerm('')}
                >
                  <i className="fas fa-times"></i>
                </button>
              )}
            </div>
          </div>
        )}
        {navItems.filter(item => 
          !(currentPage === 'home' && item.key === 'techtree')
        ).map((item) => (
          <div key={item.key} className={`nav-mobile-item ${currentPage === item.key ? 'active' : ''}`} onClick={() => setCurrentPage(item.key)} role="menuitem" tabIndex={0}>
            {item.icon && <i className={item.icon} />}
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </motion.nav>
  );
};

export default Navbar;