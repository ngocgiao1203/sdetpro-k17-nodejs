const readline = require("readline-sync");

let inputNumber = Number(readline.question("Please input a number: "));

let isEvenNumber = (inputNumber % 2 ===0);






if (inputNumber ===0){
    console.log("Zero is not considered as even/odd number:");
}else if (isEvenNumber){
    console.log(`The ${inputNumber} is an even number!`);
}else {
    console.log(`The ${inputNumber} is an odd number!`);
}