const path = require('path');

// 1. Joining Paths
const joinedPath = path.join(__dirname, 'uploads', 'file.txt');
console.log('Joined Path:', joinedPath);

// 2. Getting the File Name
const filePath = '/users/john/documents/report.pdf';
const fileName = path.basename(filePath);
console.log('File Name:', fileName);

// 3. Getting the Directory Name
const dirName = path.dirname(filePath);
console.log('Directory Name:', dirName);

// 4. Getting the File Extension
const fileExt = path.extname(filePath);
console.log('File Extension:', fileExt);

// 5. Parsing a Path
const pathObj = path.parse(filePath);
console.log('Parsed Path Object:', pathObj);

// 6. Formatting a Path
const formattedPath = path.format(pathObj);
console.log('Formatted Path:', formattedPath);

// 7. Resolving Paths
const resolvedPath = path.resolve('uploads', 'file.txt');
console.log('Resolved Path:', resolvedPath);

// 8. Normalizing Paths
const normalizedPath = path.normalize('/users/john/../documents/./report.pdf');
console.log('Normalized Path:', normalizedPath);

// 9. Checking if a Path is Absolute
console.log('Is Absolute Path:', path.isAbsolute('/users/john/file.txt')); // true
console.log('Is Absolute Path:', path.isAbsolute('users/john/file.txt'));  // false

// 10. Getting the Relative Path
const fromPath = '/users/john/documents';
const toPath = '/users/john/downloads/file.txt';
const relativePath = path.relative(fromPath, toPath);
console.log('Relative Path:', relativePath);

// 11. Working with Different Operating Systems
const crossPlatformPath = path.join('users', 'john', 'documents', 'file.txt');
console.log('Cross-Platform Path:', crossPlatformPath);