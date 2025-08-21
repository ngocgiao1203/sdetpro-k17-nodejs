// for (let index = 0; index < 5; index++) {
//     console.log(index);
// }

// let index=0;
// while(index < 5){
//     console.log(index);
//     index++;
// }

const readline = require("readline-sync");
/*
* ---LUCKY NUMBER ---
*1. Guess a number (1 -> 10)
* 0. Exit!
*/

//Dùng vòng lặp while: Khi chưa biết số lượng vòng lặp là bao nhiêu
let isStillPlaying = true;
while (isStillPlaying){
    printGameMenu();
    let userOption = getUserOption();

    if(userOption === 0){
        isStillPlaying = false;
    } else if(userOption === 1){
        //Game logic here
        let randomNumber = Math.floor(Math.random() * 10) +1;
        console.log(`Lucky number is ${randomNumber}`);
        
    }else{
        console.log(`Nhập lụi rồi Tèo ơi`);
    }
}
console.log(`Hẹn gặp lại`);

function printGameMenu(params) {
    console.log(`
/** 
* ---LUCKY NUMBER ---
* 1. Guess a number (1 -> 10)
* 0. Exit!

*/`);
    
}

function getUserOption(){
    return Number(readline.question(`Please select an option: `));
}

//Dùng vòng lặp for
// for(;isStillPlaying;){
//       printGameMenu();
//     let userOption = getUserOption();

//     if(userOption === 0){
//         isStillPlaying = false;
//     } else if(userOption === 1){
//         //Game logic here
//         let randomNumber = Math.floor(Math.random() * 10) +1;
//         console.log(`Lucky number is ${randomNumber}`);
        
//     }else{
//         console.log(`Nhập lụi rồi Tèo ơi`);
//     }
// }