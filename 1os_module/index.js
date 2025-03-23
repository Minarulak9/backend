// Challenge1 from chatGPT
// Import the 'os' module to access operating system-related information
const os = require('os');

console.log("========System Information=========");

// Display the operating system name
// os.platform() returns the operating system platform (e.g., 'win32', 'linux', 'darwin' for macOS)
console.log("Operating System:", (os.platform() == 'win32') ? "Windows" : os.platform());

// os.arch() returns the CPU architecture
console.log("Architecture: ", os.arch());

console.log("CPU Details:");

// os.cpus() returns an array of objects containing information about each CPU core
console.log("\tModel: ", os.cpus()[0].model);

// Display the speed of the first CPU core in MHz
console.log("\tSpeed: ", os.cpus()[0].speed);


console.log("Memory Details:");

// os.freemem() returns the amount of free system memory in bytes
// Convert bytes to GB and format it to 2 decimal places
console.log("\t Free Memory:", (os.freemem() / 1024 / 1024 / 1024).toFixed(2) + "GB");

// os.totalmem() returns the total amount of system memory in bytes
// Convert bytes to GB and format it to 2 decimal places
console.log("\t Total Memory:", (os.totalmem() / 1024 / 1024 / 1024).toFixed(2) + "GB");

// os.uptime() returns the system uptime in seconds
// Convert seconds to hours and format it to 2 decimal places
console.log("System Uptime: ", (os.uptime() / 60 / 60).toFixed(2), "HR Before");

// Display information about the current user
// os.userInfo() returns an object containing information about the current user (e.g., username, home directory)
console.log(os.userInfo());
