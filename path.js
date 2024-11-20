const path = require("path");

console.log(__filename); // Full path to file
console.log(__dirname); // Full path to folder

console.log(path.basename(__filename)); // Last portion of path
console.log(path.basename(__dirname));

console.log(path.extname(__filename)); // extension of file, empty if no (.)

console.log(path.parse(__filename)); // detail value like base, ext etc. in an object
console.log(path.parse(__dirname));

console.log(path.isAbsolute(path.basename(__filename))); // Check if path is absolute: false
console.log(path.isAbsolute(__filename)); // true

console.log(path.join("home/", "documents", "wb")); // Normalizes the path

console.log(path.resolve("folder1", "folder2", "folder3")); // Add absolute path is not starting with /, here adding
console.log(path.resolve("/folder1", "folder2", "folder3")); // Add absolute path is not starting with /, here not adding
