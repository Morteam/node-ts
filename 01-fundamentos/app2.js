// * Inner Node package
const fs = require('fs'); // File System

// Read
const data = fs.readFileSync('README-REACT.md', 'utf-8')

// Modify
const newData = data.replace(/React/gi, 'Angular')

console.log('TO 1 ', newData.replaceAll(' ', '*'))

// Write
const newFile = fs.writeFileSync('README-ANGULAR.md', newData)
