// Import the 'fs' module to interact with the file system
const fs = require("fs");

// fs.writeFile() is an asynchronous function that creates or overwrites a file
fs.writeFile("./test.txt", "Hello, World!", (err) => {
  // If an error occurs during file writing, throw the error
  if (err) throw err;

  // Log a success message if the file is created successfully
  console.log("File created !");

  // fs.readFile() is an asynchronous function that reads the file content
  fs.readFile("./test.txt", "utf-8", (err, data) => {
    // If an error occurs during file reading, throw the error
    if (err) throw err;

    // Log the content of the file
    console.log("File Content:", data);

    // fs.appendFile() is an asynchronous function that appends data to the file
    fs.appendFile("./test.txt", " Let's learn more!", (err) => {
      // If an error occurs during appending, throw the error
      if (err) throw err;

      // Log a success message if the file is updated successfully
      console.log("File Updated Successfully");

      // Read the updated content of the file 'test.txt'
      fs.readFile("./test.txt", "utf-8", (err, data) => {
        // If an error occurs during file reading, throw the error
        if (err) throw err;

        // Log the updated content of the file
        console.log("Updated File Content:", data);
      });
    });
  });
});

// PROBLEM: CALLBACK HELL
// This code demonstrates "callback hell," a situation where multiple nested callbacks
// make the code difficult to read, maintain, and debug. Each asynchronous operation
// depends on the completion of the previous one, leading to deeply nested code.
// This structure becomes problematic as the number of operations increases, making
// the code harder to follow and prone to errors.

// Key issues with callback hell:
// 1. **Readability**: The code becomes harder to read and understand due to excessive nesting.
// 2. **Maintainability**: Adding or modifying functionality becomes challenging.
// 3. **Error Handling**: Error handling becomes repetitive and cumbersome.
// 4. **Scalability**: As more operations are added, the code becomes unmanageable.

// Solutions to avoid callback hell:
// 1. Use **Promises** to chain asynchronous operations.
// 2. Use **async/await** for a more synchronous-like coding style.
// 3. Modularize the code by breaking it into smaller functions.
