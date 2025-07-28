// Count how many odd, even number(s) in an integer array
const readline = require("readline-sync");
let totalInputNumber = Number(readline.question("How many numbers:"));
if(totalInputNumber >10 || totalInputNumber <2){
    console.log(`We accept from 2 - 10 numbers only`);
    process.exit(1);
}

let intArr=[]
for(let index =0; index < totalInputNumber; index++){
    let inputNumber = Number(readline.question(`Nhap so thu ${index+1}:`));
    intArr.push(inputNumber);
}
// let intArr = [1, 2, 3, 4, 5];

// Even numders: 2
// Odd numbers: 3
let oddNumber = 0;
let oddArray =[];
let evenNumber = 0;
let evenArray = [];


for (let index = 0; index < intArr.length; index++) {
  if (isOddNumber(intArr[index])) {
    oddNumber++;
    oddArray.push(intArr[index]);
  } else {
    evenNumber++;
    evenArray.push(intArr[index]);
  }
}
console.log(`Tong cong co ${oddNumber} so le - gom ${oddArray}`);
console.log(`Tong cong co ${evenNumber} so chan - gom ${evenArray}`);


function isOddNumber(number) {
  return number % 2 !== 0;
}
