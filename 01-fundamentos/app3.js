// * Inner Node package
const fs = require('fs'); // File System

// How much words are there?

// Read
const FILENAME = 'README-REACT.md'
const fileData = fs.readFileSync(FILENAME, 'utf-8')

// Counting
const words = fileData.split(' ');

// Fn
const counterWords = (word, wordsArray, fileName = FILENAME) => {
    if(!word || !words.length) return null;

    // * First approach 
    // let counter = 0;

    // wordsArray?.forEach(wordItem => {
    //     if(word.toLowerCase() === wordItem.toLowerCase()) counter++;
    // })

    // * Second approach
    // const counter = wordsArray.match(/react/gi ?? []).length
    const counter = fileData.match(/React/gi).length;

    console.log(`The word ${word} is ${counter} times in ${fileName}`)
}

counterWords('React', words);