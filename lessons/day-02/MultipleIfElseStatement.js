/**
* <18: khong ban!
* 18 - 55: Unlimited!
* 56 -> 2 chai!
*
*/
const readline = require("readline-sync"); //Nhập từ bàn phím
let clientAge = Number(readline.question("Your age: "));
if (clientAge < 18){
    console.log("Khong ban!");
}else if (clientAge >= 18 && clientAge <=55){
    console.log("Unlimited!");
}else{
    console.log("2 chai!");                         
}

//Input 17
// if (clientAge < 18){
//     console.log("Khong ban!");
// }
// if (clientAge <=55){
//     console.log("Unlimited!");
// }
// if(clientAge > 55){
//     console.log("2 chai!");                         
// }