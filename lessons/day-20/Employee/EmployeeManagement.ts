import FTE from "./FTE";
import ParttimeEmployee from "./ParttimeEmployee";
import { SalaryController } from "./SalaryController";


//Construct data: người nhạc trưởng
const MAX_BONUS = 1000;
const teo = new FTE(20000); //hướng đối tượng
    teo.setWorkingDay(250);
    teo.setBonus(MAX_BONUS)
console.log(`Teo's bonus: ${teo.getBonus()}`); //~798

const ti = new ParttimeEmployee(19000);
    console.log(ti.getName());


//Construct controller: Controller muốn lấy từ đâu
const salaryController = new SalaryController(); //hướng hàm (do ý đồ của lập trình viên)

//Use Controller to process data: Xử lý nó ra làm sao
const totalSalary = salaryController.getTotalSalary([teo, ti]); //argument: là 1 cái có giá trị đưa vô parameters
console.log(`Total salary: ${totalSalary}`);