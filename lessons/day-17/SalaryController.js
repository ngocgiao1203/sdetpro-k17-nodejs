//SalaryController: Hình hài của Controller
//FP - process data: Dùng để xử lý tính lương

class SalaryController{

    //FP
    getTotalSalary(employeeList){
        let totalSalary = 0;
        for(const emp of employeeList){
            totalSalary = totalSalary + emp.salary; //salary cũ + employee's salary
        }
        return totalSalary;
    }

}

let salaryController = new SalaryController();
module.exports = SalaryController;


//Chương trình đẹp là:
//1. Dễ nhìn thấy, dễ đọc, dễ hiểu. Biết cái gì ở đâu, ở đâu
//2. Dễ maintain
//3. Dễ mở rộng
//4. Tăng độ tin cậy



//tạo dc data từ data model
//tạo dc 1 object từ controller -> bảo controller đó xử lý data để ra dc kết quả cho họ