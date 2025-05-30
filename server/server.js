const express = require('express');
const cors = require('cors');
require('dotenv').config(); // Load environment variables from .env file

const app = express();
const port = process.env.PORT || 5000; // Use port from .env, or default to 5000

// Middleware: Functions that run before your routes
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(express.json()); // Enable parsing of JSON request bodies (for data sent from frontend)

// Define a basic route
// When someone visits the root URL ('/'), send a welcome message
app.get('/', (req, res) => {
  res.send('Welcome to the MERN Portfolio Backend!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});