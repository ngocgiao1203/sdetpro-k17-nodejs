//CÁCH 1. IMPORT AS A MODULE
//import từ file cùng folder:
    // const UtilMethods = require("./UtilMethods.js");

//import từ file khác folder:
    // const UtilMethods = require("../utils/UtilMethods.js");
    let userInput = UtilMethods.getUserInputNum();
let userInputNumFnExpession = UtilMethods.getUserInputNumFnExpression();

//CÁCH 2. DESTRUCTURE
const{getUserInputNum} = require("./UtilMethods.js");
let userInput1 = getUserInputNum();




//==================
//Dùng cách 2 của UtilMethods.js


