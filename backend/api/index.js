// Vercel serverless function entry point
try {
  const appModule = require('../dist/index');
  const app = appModule.default || appModule;
  
  // Export the Express app for Vercel
  module.exports = app;
} catch (error) {
  console.error('Error loading app:', error);
  module.exports = (req, res) => {
    res.status(500).json({ 
      error: 'Failed to load application',
      message: error.message 
    });
  };
}
