let myArray = [1, 2, 3, 4, 5];

//Filter just even numbers from array
//filter is HOF: higher order function


let myEvenNums = myArray.filter(isEvenNumber); //nhận vô định nghĩa của 1 hàm (isEvenNumber)
console.log(myEvenNums);
function isEvenNumber(number){//công thức nấu ăn
    return number % 2 === 0;
}

let myOddNums = myArray.filter(isOddNumber);

function isOddNumber(value, index, array){
    console.log(`Validating value ${value} at index ${index} and the array is now: ${array}`);
    return !isEvenNumber(value, index, array);
}

//DELETE/ Splice
let startIndex = 2;
let deleteCount = 1;
let insertValue = 10;
let clonedArray = [...myArray];// Spread Syntax (Cú pháp trải rộng)
let returnedArray = myArray.splice(startIndex, deleteCount, insertValue);
console.log(returnedArray);
console.log(myArray);



