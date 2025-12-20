import Employee from "./Employee";


export default class ParttimeEmployee extends Employee{
    constructor(salary: number){
        super(salary);
        this.name = "Part time Employee";
    }
}