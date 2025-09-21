class Employee{
    constructor(salary){
        this._salary = salary;
    }

    getSalary(){
        return this._salary;
    }

    setSalary(salary){
        this._salary = salary;
    }
}

module.exports = Employee;