// Create web server
const express = require('express');
const app = express();

// Import the comments array from comments.js
const comments = require('./comments');

// Use the express.static() method to serve the public folder
app.use(express.static('public'));

// Create a GET route that sends all of the comments to the client
app.get('/comments', (req, res) => {
  res.send(comments);
});

// Start the server
app.listen(4001, () => {
  console.log('Server is listening on port 4001');
});