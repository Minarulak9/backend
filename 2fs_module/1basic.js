// Import the 'fs' module to interact with the file system
const fs = require('fs');

// fs.readFile() is an asynchronous function that reads the file content
// 'utf-8' encoding is passed to ensure the data is returned as a string instead of a buffer
fs.readFile('./code.txt', 'utf-8', (err, data) => {
  // Check if an error occurred during file reading
  if (!err) {
    // If no error, log the file content
    console.log("Content Async:", data); // Logs the file content as a string
  } else {
    // If an error occurs, log the error message
    console.log(err.message);
  }
});

// fs.readFileSync() is a synchronous function that blocks the execution until the file is read
// 'utf-8' encoding is passed to ensure the data is returned as a string instead of a buffer
let content = fs.readFileSync('./code.txt', 'utf-8');

// Log the content of the file read synchronously
console.log("File Content Sync:", content);

// Log a message to indicate this should be printed after the file content
console.log("This should be print after the file content.");
