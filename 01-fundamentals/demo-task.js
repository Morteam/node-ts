const fs = require('fs'); // Native Module

const content = fs.readFileSync('README.md', 'utf-8'); // Read Synchronous and blocking code
const react = 'React';

const countWords = content.split(' ');
const reactWordCounts = content.match(/react/gi ?? []).length // Filter all react words on the document

console.log(reactWordCounts)
