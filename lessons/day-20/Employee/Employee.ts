
export default class Employee{
    protected salary:number; 
    protected name: string = 'Employee';
    protected bonus: number = 0;
    protected workingDays: number = 0;

    constructor(salary: number){ 
        this.salary = salary; 
    }

    public getSalary(){
        return this.salary;
    }

    public getName(){
        return this.name;
    }

    public getBonus(){
        return this.bonus;
    }
    
    public getWorkingDay(){
        return this.workingDays;
    }

    protected setBonus(amount: number) {
        this.bonus = amount;
    }

    public setWorkingDay(workingDays: number){
        this.workingDays = workingDays;
    }

}


