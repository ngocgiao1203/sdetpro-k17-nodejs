
export default class Employee{
    protected salary:number; 
    protected name: string = 'Employee';
    protected bonus: number;
    protected workingDays;

    constructor(salary: number, workingDays: number){ 
        this.salary = salary; 
        this.bonus = 0;
        this.workingDays = workingDays;
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

    public setBonus(bonus: number) {
        this.bonus = bonus;
    }

    public setWorkingDay(workingDays: number){
        this.workingDays = workingDays;
    }

}


