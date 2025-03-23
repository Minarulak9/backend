// Import the 'fs' module's promises API for asynchronous file system operations
const fsPromises = require('fs').promises;

// Function to create a new file with the given path and data
async function createFile(path, data) {
    try {
        // Use fsPromises.writeFile to create or overwrite the file with the provided data
        await fsPromises.writeFile(path, data);
        console.log("File Created Successfully!");
    } catch (error) {
        // Log any errors that occur during file creation
        console.log(error);
    }
}

// Function to read the content of a file at the given path
async function readFile(path) {
    try {
        // Use fsPromises.readFile to read the file content with 'utf-8' encoding
        let data = await fsPromises.readFile(path, "utf-8");
        return data; // Return the file content
    } catch (error) {
        // Log any errors that occur during file reading
        console.log(error);
    }
}

// Function to append new content to a file at the given path
async function appendContent(path, newContent) {
    try {
        // Use fsPromises.appendFile to add new content to the file
        await fsPromises.appendFile(path, newContent);
        console.log("File updated successfully.");
    } catch (error) {
        // Log any errors that occur during appending
        console.log(error);
    }
}

// Function to clear the content of a file at the given path
async function clearContent(path) {
    try {
        // Use fsPromises.writeFile to overwrite the file with an empty string
        await fsPromises.writeFile(path, '');
        console.log("File cleared.");
    } catch (error) {
        // Log any errors that occur during clearing
        console.log(error);
    }
}

// Function to delete a file at the given path
async function deleteFile(path) {
    try {
        // Use fsPromises.unlink to delete the file
        await fsPromises.unlink(path);
        console.log(path, "is deleted successfully");
    } catch (error) {
        // Log any errors that occur during deletion
        console.log(error);
    }
}

// Function to rename a file from the old path to the new path
async function renameFile(path, newPath) {
    try {
        // Use fsPromises.rename to rename the file
        await fsPromises.rename(path, newPath);
        console.log(`File renamed from ${path} to ${newPath}`);
    } catch (error) {
        // Log any errors that occur during renaming
        console.log(error);
    }
}

// Function to get the statistics (metadata) of a file at the given path
async function fileStats(path) {
    try {
        // Use fsPromises.stat to retrieve file statistics
        let data = await fsPromises.stat(path);
        return data; // Return the file statistics
    } catch (error) {
        // Log any errors that occur during retrieval
        console.log(error);
    }
}

// Function to watch a file for changes and log the differences
async function watchFile(path) {
    try {
        console.log(`Watching for changes in: ${path}`);

        // Read the initial content of the file
        let prevContent = await fsPromises.readFile(path, 'utf-8');
        const prevLines = prevContent.split("\n"); // Split content into lines for comparison

        // Start watching the file for changes
        const watcher = fsPromises.watch(path);

        // Use a for-await loop to handle file change events
        for await (const event of watcher) {
            if (event.eventType === 'change') {
                // Read the updated content of the file
                let curContent = await fsPromises.readFile(path, 'utf-8');
                const curLines = curContent.split("\n"); // Split updated content into lines

                console.log(`\n🔄 File "${path}" changed at ${new Date().toLocaleTimeString()} 🔄\n`);

                // Compare the previous and current content line by line
                for (let i = 0; i < Math.max(prevLines.length, curLines.length); i++) {
                    if (prevLines[i] !== curLines[i]) {
                        // Log the modified line and its changes
                        console.log(`🔹 Line ${i + 1} modified:\n❌ Previous: ${prevLines[i] || 'EMPTY'}\n✅ Current: ${curLines[i] || 'EMPTY'}`);
                    }
                }

                // Update the previous content to the current content for the next comparison
                prevContent = curContent;
            }
        }
    } catch (error) {
        // Log any errors that occur during file watching
        console.error("Error watching file:", error);
    }
}

// Export all the functions to make them available for use in other modules
module.exports = { createFile, readFile, appendContent, clearContent, deleteFile, renameFile, fileStats, watchFile };