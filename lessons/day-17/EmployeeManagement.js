const Employee = require("./EmployeeModel");
const SalaryController = require("./SalaryController");

//Construct data: người nhạc trưởng
const teo = new Employee(20000); //hướng đối tượng
const ti = new Employee(19000);



//Construct controller: Controller muốn lấy từ đâu
const salaryController = new SalaryController(); //hướng hàm (do ý đồ của lập trình viên)

//Use Controller to process data: Xử lý nó ra làm sao
const totalSalary = salaryController.getTotalSalary([teo, ti]);
console.log(`Total salary: ${totalSalary}`);