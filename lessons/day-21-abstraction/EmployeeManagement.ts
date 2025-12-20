import FTE from "./FTE";
import PartimeEmployee from "./PartimeEmployee";
import { SalaryController } from "./SalaryController";


//Construct data: người nhạc trưởng
const teo = new FTE("Teo",20000, 250); //hướng đối tượng
console.log(`Teo's bonus: ${teo.getBonus()}`); //~798

const ti = new PartimeEmployee("Ti",19000, 200);
console.log(`Ti's bonus: ${ti.getBonus()}`); //~798



//Construct controller: Controller muốn lấy từ đâu
const salaryController = new SalaryController(); //hướng hàm (do ý đồ của lập trình viên)

//Use Controller to process data: Xử lý nó ra làm sao
const totalSalary = salaryController.getTotalSalary([teo, ti]); //argument: là 1 cái có giá trị đưa vô parameters
console.log(`Total salary: ${totalSalary}`);