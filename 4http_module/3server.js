const fs = require('fs'); // File System module to handle file operations (e.g., reading files)
const http = require('http'); // HTTP module to create an HTTP server

// Create an HTTP server using the `http.createServer` method
const server = http.createServer((req, res) => {
    // This callback function is executed whenever a client makes a request to the server.

    // ============================================
    // Traditional Approach (Commented Out)
    // ============================================
    // fs.readFile('big.txt', 'utf-8', (err, data) => {
    //     if (err) {
    //         console.log(err); // Log the error if something goes wrong
    //         return; // Exit the function if there's an error
    //     }
    //     res.writeHead(200, {'content-type': 'text/plain'}); // Set the response header with status code 200 and content type
    //     res.end(data); // Send the file content as the response and end the response
    // });

    // ============================================
    // Optimized Approach (Using Streams)
    // ============================================
    // Create a readable stream from the file 'big.txt'
    const stream = fs.createReadStream('big.txt');
    res.writeHead(200, {'content-type': 'text/plain'});

    // Pipe the file stream to the response object
    // This means that as chunks of data are read from the file, they are immediately sent to the client.
    stream.pipe(res);

    // Explanation of `stream.pipe(res)`:
    // - The `pipe` method connects the readable stream (file) to the writable stream (HTTP response).
    // - It handles backpressure automatically, ensuring that data is sent to the client at an optimal rate.
    // - This approach is memory-efficient because it doesn't load the entire file into memory.
});

server.listen(5000, () => {
    // This callback function is executed once the server starts successfully.
    console.log('Server running... on http://localhost:5000');
});



// *NOTE:: 
// Traditional Approach: Reads the entire file into memory, leading to high memory usage and high TTFB (Time To First Byte).

// Optimized Approach: Uses streams to read and send the file in chunks, resulting in lower memory usage and lower TTFB.
// TTFB (Time To First Byte): The time it takes for the client to receive the first byte of data from the server. The optimized approach reduces TTFB significantly.