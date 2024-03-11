const fs = require('fs'); // Native Module

const data = fs.readFileSync('README.md', 'utf-8'); // Read Synchronous and blocking code

const newData = data.replace(/React/ig, 'Angular');

fs.writeFileSync('README-ANGULAR.md', newData) // Write Synchronous and blocking code

console.log(data);
console.log(newData);
