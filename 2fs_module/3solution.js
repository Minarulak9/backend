// Import functions from the custom module './4fileSystem'
// These functions are used to perform various file system operations
const { createFile, readFile, appendContent, clearContent, deleteFile, renameFile, fileStats, watchFile } = require('./fileSystem');

// Define an asynchronous function 'run' to execute file operations sequentially
async function run() {
    // createFile() is an asynchronous function that creates a file and writes the provided content
    await createFile('mak.txt', "Hello, this file is created by MinarulAk.");

    // appendContent() is an asynchronous function that appends data to the file
    // The new content includes a timestamp using `new Date().toString()`
    await appendContent('mak.txt', `\nYou are Awesome${new Date().toString()}`);

    // clearContent() is an asynchronous function that erases all content in the file
    // await clearContent('mak.txt');

    // Append more content to the file 'mak.txt'
    await appendContent('mak.txt', "\nThis is new Content boooooom");

    // Read the content of the file 'mak.txt'
    // readFile() is an asynchronous function that reads and returns the file content
    let data = await readFile('./mak.txt');
    console.log("File Content:", data); // Log the file content to the console

    // Get the statistics of the file 'mak.txt'
    // fileStats() is an asynchronous function that returns file metadata (e.g., size, creation time)
    let d = await fileStats('mak.txt');
    console.log(d); // Log the file statistics to the console

    // Watch the file 'mak.txt' for changes
    // watchFile() is an asynchronous function that monitors the file for modifications
    await watchFile('mak.txt');

    // renameFile() is an asynchronous function that renames a file
    // await renameFile('mak.txt', 'mak2.txt');

    // deleteFile() is an asynchronous function that deletes a file
    // await deleteFile('mak.txt');
}

// Execute the 'run' function to perform the file operations
run();