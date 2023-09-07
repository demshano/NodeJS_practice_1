const { readFileSync, writeFileSync } = require('fs');

const first = readFileSync('./content/subFolder/test.txt', 'utf8');
const secondTextFile = readFileSync('./content/subFolder/second.txt', 'utf8');

console.log(first);
console.log(secondTextFile);

writeFileSync('./content/result-sync.txt', `here is the result: ${first} : ${secondTextFile}`, {flag: 'a'});

const resultSyncFile = readFileSync('./content/result-sync.txt', 'utf8');

console.log(resultSyncFile);