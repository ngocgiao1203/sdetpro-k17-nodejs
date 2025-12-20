//user-defined data: loại dữ liệu có cấu trúc, thuộc tính bên trong do người dùng định nghĩa ra
//Khi viết 1 class, cần xác định rõ class đang "hướng đối tượng" HAY "hướng hàm"

//Focus into Properties: salary

export default class Employee{
    //Private: define những properties mà chỉ có class "Employee" được accept
    protected salary:number; //khai báo: định nghĩa tên + KDL của biến, giá trị chưa dc gán
    protected name: string = 'Employee';

    constructor(salary: number){ //Nếu ko đưa giá trị cho "constructor"; mình sẽ dùng setter để đưa vào sau
        this.salary = salary; //Khi có 1 property (salary) được declare ngoài constructor -> thì cần init trong constructor
    }

    public getSalary(){
        return this.salary;
    }

    public getName(){
        return this.name;
    }
}


//"this.salary" là thuộc tính "protected salary:number" của object Employee đang được tạo