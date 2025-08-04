const readline = require("readline-sync");

let userInput = getUserInput();

// if (userInput === 2) {
//   console.log("Mon");
// } else if (userInput === 3) {
//   console.log("Tue");
// } else if (userInput === 4) {
//   console.log("Wed");
// } else if (userInput === 5) {
//   console.log("Thu");
// } else if (userInput === 6) {
//   console.log("Fri");
// } else if (userInput === 7) {
//   console.log("Sat");
// } else if (userInput === 8) {
//   console.log("Sun");
// } else {
//   console.log("undefinded!");
// }

switch (
  userInput //switch: dựa vào
) {
  case 2: //body scope. Sau khi làm xong -> break để ko chạy tiếp các case tiếp theo
  case 3:
  case 4:
  case 5:
  case 6:
    console.log("Weekdays");
    break;
  case 7:
  case 8:
    console.log("Weekend!");
    break;
  default:
    console.log("undefinded!");

}
function getUserInput() {
  return Number(readline.question("Please enter your number: "));
}
//object literal