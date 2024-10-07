const path = require('path');

const filePath = '/user/local/bin/file.txt';

const baseName = path.basename(filePath);
const dirName = path.dirname(filePath);
const extName = path.extname(filePath);
const joinedPath = path.join('/user', 'local', 'bin', 'file.txt');
const absolutePath = path.resolve('file.txt');

console.log(`Base Name: ${baseName}`);
console.log(`Directory Name: ${dirName}`);
console.log(`Extension Name: ${extName}`);
console.log(`Joined Path: ${joinedPath}`);
console.log(`Absolute Path: ${absolutePath}`);
