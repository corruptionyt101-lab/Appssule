const express = require('express');
const app = express();

// Import your existing routes or app logic if you have an app.js
// const appModule = require('./app');

app.get('/', (req, res) => {
  res.send('Backend is running on Vercel!');
});

if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

module.exports = app;
