const readline = require("readline-sync");
//Method 01: [ Function Declaration ] - cách khai báo | hoisting 
function getUserInputNum(){
    let inputNum = readline.question("Your number: ");
    return Number(inputNum); 
}

//Method 02: [Function Expession] | NO hoisting
const getUserInputNumFnExpression = function(){
     let inputNum = readline.question("Your number: ");
    return Number(inputNum);
}

//Common JS Module
module.exports = {
    getUserInputNum,
    getUserInputNumFnExpression
}

//cách 2
module.exports ={
    getInputFromKeyBoard: getUserInputNum,
    getInputFnExpressionFromKeyBoard: getUserInputNumFnExpression
}