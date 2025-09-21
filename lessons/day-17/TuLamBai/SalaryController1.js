const Employee = require("./EmployeeModel1");

class SalaryController{

    getTotalSalary(employeeList){
        let totalSalary = 0;
        for (const emp of employeeList) {
            totalSalary += emp.getSalary();
        }
        return totalSalary;
    }
}

module.exports = SalaryController;
// let employee = new Employee();
let employee = new Employee();