//BTVN - lab 7
const readline = require("readline-sync");

let inputSentence = readline.question("Input sentence: ");

//removing commas.
let editSentence = inputSentence.replaceAll(",", "").toLowerCase();
console.log(editSentence);

//Split the sentence into an array of words.
let array = editSentence.split(" ");

// 1. Solve the problem using an object
let wordCounts = {};
// Loop through each word in the array
for (let index = 0; index < array.length; index++) {
  let word = array[index];
  if (word in wordCounts) {
    // Check if the word already exists as a key in our object
    wordCounts[word]++;
  } else {
    // If it doesn't exist, add it to the object with a count of 1
    wordCounts[word] = 1;
  }
}

console.log(`\nWord Counts: `);
for(let word in wordCounts){
    console.log(`${word}: ${wordCounts[word]}`);
    
}
