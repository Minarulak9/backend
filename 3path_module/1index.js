// Import the 'path' module to work with file and directory paths
const path = require('path');

// 1. Joining Paths
// path.join() joins multiple path segments into a single path
const joinedPath = path.join(__dirname, 'uploads', 'file.txt');
console.log('Joined Path:', joinedPath); // Outputs: Full path to 'file.txt' inside the 'uploads' directory

// 2. Getting the File Name
// path.basename() returns the last portion of a path (the file name)
const filePath = '/users/john/documents/report.pdf';
const fileName = path.basename(filePath);
console.log('File Name:', fileName); // Outputs: 'report.pdf'

// 3. Getting the Directory Name
// path.dirname() returns the directory name of a path
const dirName = path.dirname(filePath);
console.log('Directory Name:', dirName); // Outputs: '/users/john/documents'

// 4. Getting the File Extension
// path.extname() returns the file extension of a path
const fileExt = path.extname(filePath);
console.log('File Extension:', fileExt); // Outputs: '.pdf'

// 5. Parsing a Path
// path.parse() parses a path into an object with properties like root, dir, base, ext, and name
const pathObj = path.parse(filePath);
console.log('Parsed Path Object:', pathObj);
/* Outputs:
{
  root: '/',
  dir: '/users/john/documents',
  base: 'report.pdf',
  ext: '.pdf',
  name: 'report'
}
*/

// 6. Formatting a Path
// path.format() takes a path object and returns a path string
const formattedPath = path.format(pathObj);
console.log('Formatted Path:', formattedPath); // Outputs: '/users/john/documents/report.pdf'

// 7. Resolving Paths
// path.resolve() resolves a sequence of paths into an absolute path
const resolvedPath = path.resolve('uploads', 'file.txt');
console.log('Resolved Path:', resolvedPath); // Outputs: Absolute path to 'file.txt' inside the 'uploads' directory

// 8. Normalizing Paths
// path.normalize() normalizes a path by resolving '..' and '.' segments
const normalizedPath = path.normalize('/users/john/../documents/./report.pdf');
console.log('Normalized Path:', normalizedPath); // Outputs: '/users/documents/report.pdf'

// 9. Checking if a Path is Absolute
// path.isAbsolute() checks if a path is absolute (starts with a root directory)
console.log('Is Absolute Path:', path.isAbsolute('/users/john/file.txt')); // true
console.log('Is Absolute Path:', path.isAbsolute('users/john/file.txt'));  // false

// 10. Getting the Relative Path
// path.relative() returns the relative path from one path to another
const fromPath = '/users/john/documents';
const toPath = '/users/john/downloads/file.txt';
const relativePath = path.relative(fromPath, toPath);
console.log('Relative Path:', relativePath); // Outputs: '../downloads/file.txt'

// 11. Working with Different Operating Systems
// path.join() automatically uses the correct path separator for the current operating system
const crossPlatformPath = path.join('users', 'john', 'documents', 'file.txt');
console.log('Cross-Platform Path:', crossPlatformPath); // Outputs: 'users/john/documents/file.txt' (on Unix) or 'users\john\documents\file.txt' (on Windows)