//Get input from user about height(m) and weight(kg) then calculate BMI

// Underweight: <18.5
// Normal weight: 18.5 – 24.9
// Overweight: 25–29.9
// Obesity: BMI of 30 or greater
// BMI = weight / (height x height)


const readline = require("readline-sync");

let height;
let heightInput;
let weight;
let weightInput;



while(true){//1. Tạo vòng lặp -> Chỉ kết thúc vòng lặp khi user nhập valid weight, height
    heightInput = readline.question("Height (m): ");
    weightInput = readline.question("Weight (kg): ");

    //1. Nếu nhập thiếu weight/ height 
    if((heightInput.trim()==="") || (weightInput.trim()==="")){
        console.log("You must enter both Weight & Height");//-> in ra "You must enter both Weight & Height"
        continue;
    }

    height = Number(heightInput);
    weight = Number(weightInput);

    //Nếu nhập value vào height/ weight không phải số 
    if(isNaN(height) || isNaN(weight)){
        console.log("Please enter a valid number."); //-> in ra "Please enter a valid number." -> bắt nhập lại
        continue;
    }

    //Nếu nhập height/weight <=0 
    if((height <=0) ||(weight <=0)){
        console.log("Height & Weight must be greater than 0");
        continue;
    }
    break;  // chỉ thoát nếu mọi điều kiện đều hợp lệ

}

let BMI = weight/(height * height);

console.log(`Your BMI is: ${BMI}`);
if(BMI<18.5){
    console.log("Underweight");
}else if((BMI >=18.5) && (BMI<25)){
    console.log("Normal weight");
}else if((BMI>=25) && (BMI<=30)){
    console.log("Overweight");
}else{
    console.log("Obesity");
}
    

