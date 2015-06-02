const express = require('express');
const app = express();

// Load the external libraries
app.get('/node_modules/*', function(req, res) {
  res.sendFile(req.url, {
    root: __dirname
  });
});

// Load the v2 History/Router PoC
app.get('/src/*', function(req, res) {
  res.sendFile(req.url, {
    root: __dirname
  });
});

// Load the script file
app.get('/script.js', function(req, res) {
  res.sendFile('script.js', {
    root: __dirname + '/example/'
  });
});

// Load our application at every other route
app.get('*', function(req, res) {
  res.sendFile('index.html', {
    root: __dirname + '/example/'
  });
});

app.listen(8821);
console.log('Application listening @ http://localhost:8821');