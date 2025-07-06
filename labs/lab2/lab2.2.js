const readline = require("readline-sync");

let numberInput;
let number;

// Lặp cho đến khi người dùng nhập một số hợp lệ
while (true) {
    numberInput = readline.question("Input a number: ");
    
    // Kiểm tra: không được để trống và phải là số
    if (numberInput.trim() === "") {
        console.log("You must enter something.");
        continue;
    }

    number = Number(numberInput);
    
    if (isNaN(number)) {
        console.log("Please enter a valid number.");
    } else {
        break; // Thoát vòng lặp khi có số hợp lệ
    }
}

// Kiểm tra chẵn / lẻ
if (number % 2 === 0) {
    console.log(`${number} is an  even number.`);
} else {
    console.log(`${number} is an odd number.`);
}
