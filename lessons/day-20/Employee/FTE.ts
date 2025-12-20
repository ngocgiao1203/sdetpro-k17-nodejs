import Employee from "./Employee";

//Extends: IS-A relationship
//Extends: Inheritance -> Design Concept + Reuse concept

export default class FTE extends Employee{
    constructor(salary: number){
        super(salary); //lệnh super() gọi đến "constructor" của class cha - tức là Employee
        this.name = "FTE"; //Override: ghi đè
    }

    //overriding
    public setBonus(maxBonus: number){
        this.bonus = maxBonus * this.workingDays / (365 - 52);
    }

}

