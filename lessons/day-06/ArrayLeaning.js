//**
// CRUD: Create Read Update Delete + Util(Built-in) methods
// 
//  */

let myArray = [1,2,3,4,5];
//1st element: index == 0
//last element: length - 1

//GET the array's length
console.log(`Array's length: ${myArray.length}`);


//Get the last element's value
let lastElementIndex = myArray.length - 1;
let lastElementValue = myArray[lastElementIndex];
console.log(`Last element's value: ${lastElementValue}`);


//Update: Using index as well but diff syntax - Assignment syntax

myArray[lastElementIndex] = 50

for(let index = 0; index<myArray.length;index++){
    console.log(`Element's value at index ${index} is: ${myArray[index]}`);
}
//Undefined holes
myArray[10] = 1000; //index ngoài ranh giới
for(let index = 0; index<myArray.length;index++){
    console.log(`Element's value at index ${index} is: ${myArray[index]}`);
}


//PUSH,POP
