const readline = require("readline-sync"); //Nhập từ bàn phím
let arrivalTimeStr = readline.question("Arrival Time: ");

//Convert a string into number
let arrivalTime = Number(arrivalTimeStr);
let isHeOnTime = (arrivalTime === 7);

//global block scope


if (isHeOnTime){
    console.log(`Let's talk`);
}else{
    console.log(`Write a letter`);
}


//Ternary operator: Toán tử 3 ngôi
let msg = isHeOnTime ? 'Let\'s talk' : "Write a letter";
console.log(msg)


//!true -> false
if (!isHeOnTime){
    console.log(`Write a letter`);
}else{
    console.log(`Let's talk`);
}


//Mimic real situation in life
if (isSalaryIncreased){
    //Nested if...else condition
    //Stay at company
    if (isSightlyDiff){
        //stay for a while
    }else{

    }
}

