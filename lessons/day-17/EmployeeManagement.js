const Employee = require("./EmployeeModel");
const SalaryController = require("./SalaryController");

//Construct data 
const teo = new Employee(20000); //hướng đối tượng
const ti = new Employee(19000);



//Construct controller
const salaryController = new SalaryController(); //hướng hàm (do ý đồ của lập trình viên)

//Use Controller to process data -> output
const totalSalary = salaryController.getTotalSalary([teo, ti]);
console.log(`Total salary: ${totalSalary}`);