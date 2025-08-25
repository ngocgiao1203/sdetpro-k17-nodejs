//AnhTuSuaBai
const readline = require("readline-sync");

const inputStr = getSentenceFromUser();
const individualWords = processInputStr(inputStr);
const groupWords = groupWordFromStr(individualWords);
console.log(groupWords);

//Functions:
function getSentenceFromUser() {
  return readline.question("Please input your sentences: ");
}

function processInputStr(inputStr) {
  return inputStr.replace(/,/gi, "").split(" ");
}

function groupWordFromStr(individualWords) {
  let returnedObj = {};
  for (const word of individualWords) {
    if (returnedObj[word]) {       //truy cap 1 property cua 1 object
      returnedObj[word] = returnedObj[word] +1;
    }else{
      returnedObj[word] = 1;
    }
  }
  return returnedObj;
}
//word:Hello
// returnedObj[word]: 1