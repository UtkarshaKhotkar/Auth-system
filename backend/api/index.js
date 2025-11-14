// Vercel serverless function entry point
const appModule = require('../dist/index.js');
const app = appModule.default || appModule;

module.exports = app;
