const Employee = require("./EmployeeModel1");
const SalaryController = require("./SalaryController1");

//Construct data
const teo = new Employee(20000);
const ti = new Employee(19000);

//Construct Controller
const salaryController = new SalaryController();


//Use Controller to process data
const totalSalary = salaryController.getTotalSalary([teo,ti]);
console.log(`totalSalary is ${totalSalary}`);
