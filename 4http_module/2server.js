// Import the required modules
const http = require('http'); // To create an HTTP server
const fs = require('fs'); // To work with the file system
const path = require('path'); // To handle file paths

// Create an HTTP server
const server = http.createServer((req, res) => {
  // req = request object (contains info about the request)
  // res = response object (used to send a response back to the client)

  // Serve the index.html file for the root route ('/')
  if (req.url === '/') {
    // Read the index.html file from the 'static' folder
    fs.readFile(path.join(__dirname, '/static/index.html'), 'utf-8', (err, data) => {
      if (err) {
        // If there's an error (e.g., file not found), send a 500 error
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
        return;
      }
      // If the file is read successfully, send it as the response
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    });
  }

  // Serve CSS files
  else if (req.url.endsWith('.css')) {
    // Read the requested CSS file from the 'static' folder
    fs.readFile(path.join(__dirname, '/static', req.url), 'utf-8', (err, data) => {
      if (err) {
        // If the file is not found, send a 404 error
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('File not found');
        return;
      }
      // If the file is read successfully, send it as the response
      res.writeHead(200, { 'content-type': 'text/css' });
      res.end(data);
    });
  }

  // Serve JavaScript files (except server.js)
  else if (req.url.endsWith('.js') && req.url !== '/server.js') {
    // Read the requested JS file from the 'static' folder
    fs.readFile(path.join(__dirname, '/static', req.url), 'utf-8', (err, data) => {
      if (err) {
        // If the file is not found, send a 404 error
        res.writeHead(404, { 'content-type': 'text/plain' });
        res.end('Page not found');
        return;
      }
      // If the file is read successfully, send it as the response
      res.writeHead(200, { 'content-type': 'application/js' });
      res.end(data);
    });
  }

  // Handle unknown routes (404 Not Found)
  else {
    // Read the 404.html file from the 'static' folder
    fs.readFile(path.join(__dirname, '/static/404.html'), 'utf-8', (err, data) => {
      if (err) {
        // If the 404.html file is not found, send a plain text 404 error
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Page not found');
        return;
      }
      // If the 404.html file is read successfully, send it as the response
      res.writeHead(200, { 'content-type': 'text/html' });
      res.end(data);
    });
  }
});

// Start the server and make it listen on port 5000
server.listen(5000, () => {
  console.log('Available Endpoints:');
  console.log('1. GET  /             - Serve index.html');
  console.log('2. GET  /*.css        - Serve CSS files');
  console.log('3. GET  /*.js         - Serve JavaScript files (except server.js)');
  console.log('4. *    (any other)   - Serve 404.html for unknown routes');
  console.log('Server running... on http://localhost:5000');
});