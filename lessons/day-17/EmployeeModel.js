// tính tổng số lương phải trả cho toàn bộ công ty  
class Employee{

    constructor(salary){
        this._salary = salary;
    }

    set salary(salary){
        this._salary = salary;
    }

    get salary(){
        return this._salary;
    }
}
module.exports = Employee; //Nếu ko export sẽ ko thể dùng dc


