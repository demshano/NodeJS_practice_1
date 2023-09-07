const path = require('path')

console.log(path.sep);

//normal file path
const filePath = path.join('/content','subFolder','test.txt');

console.log(filePath);

//only the file
const base = path.basename(filePath);

console.log(base);

//absolute path (the full path)

const absolute  = path.resolve(__dirname,'content','subFolder','test.txt');

console.log(absolute);