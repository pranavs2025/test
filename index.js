// index.js
const express = require('express');
const app = express();
require('dotenv').config(); // Load .env variables

const PORT = process.env.PORT || 3000;
const API_KEY = process.env.API_KEY || 'no-key';

app.get('/', (req, res) => {
  res.send(`Hello! Your API key is: ${API_KEY}`);
});

app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
