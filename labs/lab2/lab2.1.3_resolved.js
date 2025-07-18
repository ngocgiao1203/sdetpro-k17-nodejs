const readline = require("readline-sync");

const minIdeaBMI = 18.5;
const maxIdeaBMI = 24.9;

const userHeight = readline.question("Xin hãy nhập thông tin chiều cao (m):");
const userWeight = readline.question("Xin hãy nhập thông tin cân nặng (kg):");
const currentBMI = userWeight / (userHeight * userHeight);

console.log(`Min idea BMI: ${minIdeaBMI}, Max idea BMI: ${maxIdeaBMI}, Your BMI is: ${currentBMI}`);

if(currentBMI < minIdeaBMI){
    console.log(`Underweight`);
    let minIdeaWeight = minIdeaBMI * (userHeight * userHeight);
    console.log(`Ban can tang them it nhat ${minIdeaWeight - userWeight}`);
    
}else if (currentBMI <= maxIdeaBMI){
    console.log(`Normal weight`);
}else if(currentBMI <=29.9){
    console.log(`Overweight`);
    let maxIdeaWeight = maxIdeaBMI * (userHeight * userHeight);
    console.log(`Ban can giam them it nhat ${userWeight - maxIdeaWeight}`);
}else{
    console.log(`Obesity`);
    let maxIdeaWeight = maxIdeaBMI * (userHeight * userHeight);
    console.log(`Ban can giam them it nhat ${userWeight - maxIdeaWeight}`);
    
}




//**
// Khi bài toán phân đoạn liên tục -> if -> else if()
// 
// 
// 
// 
// 
//  */