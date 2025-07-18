// DRY stands for Don't Repeat Yourself -> gather the logic and reuse
//Single Responsibility (tính đơn nhiệm)
//clean code

/**
 * Basic naming convention for function
 * ---
 * 1. Meaning
 * 2. start with a verb + lowercase
 * 3. camelCase
 * 
 * 
 */

const readline = require("readline-sync");
//let userInputNum = getUserInputNum();
let userInputNum = getUserInputNumFnExpression();
console.log(`User input number: ${userInputNum}`);

let result = addNumber(1);
console.log(`Add result: ${result}`);

//Method 01: [ Function Declaration ] - cách khai báo | hoisting 
    //bắt đầu bằng keyword "function" -> user ko dc đặt tên biến (variable) là "function"
    //bắt đầu bằng lowerCase + là một động từ "getUserInputNum"
function getUserInputNum(){
    let inputNum = readline.question("Your number: ");
    return Number(inputNum); //return: trả về một gtri gì đó sau khi 1 logic mình đã làm xong
    //Mặc định các hàm trong JS nếu ko trả về kết quả gì cho mình -> mặc định trả về "undefined"
        //VD: dev tool -> console.log("Hello world")
}
//Method 02: [Function Expession] | NO hoisting
const getUserInputNumFnExpression = function(){
     let inputNum = readline.question("Your number: ");
    return Number(inputNum);
}


//Parameters
function addNumber(num1, num2){ //num1, num2: Parameters    //1,2,3: arguments: gtri user truyền vào
    if(num1 && num2){
        console.log(`num1: ${num1}, num2: ${num2}`);
        return num1 + num2;
    }else{
        throw new Error(`Num1 and Num2 must be number!`);
    }
}