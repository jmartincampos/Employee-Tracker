// server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Set up routes or other middleware here

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;
