// Import the 'http' module to create an HTTP server
const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
    // req = request object (contains info about the request)
    // res = response object (used to send a response back to the client)

    // Check if the request URL is the root ('/')
    if (req.url === '/') {
        // Set the response status code to 200 (OK) and specify the content type as JSON
        res.writeHead(200, { 'Content-Type': 'application/json' });
        // Send a JSON response with a welcome message
        res.end(JSON.stringify({ message: "Welcome to My API" }));
    } 

    // Check if the request URL is '/data' and the method is POST
    else if (req.url === '/data' && req.method === 'POST') {
        let body = ''; // This will store the data sent in the request body

        // When data is received in chunks, add it to the 'body' variable
        req.on('data', (chunk) => {
            body += chunk.toString(); // Convert the chunk to a string and append it
        });

        // When all the data is received, process it
        req.on('end', () => {
            // Parse the body as JSON (convert it from a string to an object)
            let data = JSON.parse(body);
            // Set the response status code to 200 (OK) and specify the content type as JSON
            res.writeHead(200, { 'content-type': 'application/json' });
            // Send a JSON response with a personalized message
            res.end(JSON.stringify({ message: `Hello, ${data.name}!` }));
        });
    }

    // Check if the request URL is '/about'
    else if (req.url === '/about') {
        // Set the response status code to 200 (OK) and specify the content type as JSON
        res.writeHead(200, { 'Content-Type': 'application/json' });
        // Send a JSON response with an about message
        res.end(JSON.stringify({ message: "This is an About Page" }));
    } 

    // If the request URL doesn't match any of the above, send a 404 error
    else {
        // Set the response status code to 404 (Not Found) and specify the content type as JSON
        res.writeHead(404, { 'Content-Type': 'application/json' });
        // Send a JSON response with an error message
        res.end(JSON.stringify({ error: "Page Not Found" }));
    }
});

// Start the server and make it listen on port 5000
server.listen(5000, () => {
    console.log("Available Endpoints:");
    console.log("1. GET  /           - Welcome message");
    console.log("2. POST /data       - Send JSON data with a 'name' field to get a personalized response");
    console.log("3. GET  /about      - About page message");
    console.log("4. *    (any other) - 404 Page Not Found");
    console.log("Server running on http://localhost:5000");
});