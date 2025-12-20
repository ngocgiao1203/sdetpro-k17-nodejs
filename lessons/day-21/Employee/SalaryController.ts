import Employee from "./Employee";

export class SalaryController{


    public getTotalSalary(employeeList: Employee[]): number{
        let totalSalary = 0;
        for(const emp of employeeList){
            // emp.setBonus
            totalSalary = totalSalary + emp.getSalary() + emp.getBonus();
        }
        return totalSalary;
    }  
}


/** 
 * Dòng 5: 
 * ": Employee[]" - là kiểu dữ liệu của tham số. Nó cho biết tham số này phải là một mảng chứa các đối tượng có kiểu là Employee (như đã được import ở dòng 1).
 * ":number" - Đây là phần khai báo kiểu dữ liệu trả về của phương thức. Nó cho biết phương thức getTotalSalary sẽ trả về một giá trị có kiểu là number (một số).
 * 
 * 
 * 
 * */

