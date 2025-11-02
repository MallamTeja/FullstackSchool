const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from React build
app.use(express.static(path.join(__dirname, 'build')));

// API route for tech data (if needed)
app.get('/api/technologies', (req, res) => {
  const techData = require('./src/data/techlist.json');
  res.json(techData);
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'DevPathStack server is running!',
    timestamp: new Date().toISOString()
  });
});

// Serve React app for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log('🚀 DevPathStack Server Started!');
  console.log(`📱 Local: http://localhost:${PORT}`);
  console.log(`🌐 Server running on port ${PORT}`);
  console.log('🎯 Ready to teach developers modern tech stacks!');
});