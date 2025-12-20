import Employee from "./Employee";


export default class ParttimeEmployee extends Employee{
    constructor(salary: number, workingDays: number){
        super(salary, workingDays);
        this.name = "Part time Employee";
    }
}