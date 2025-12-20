import Employee from "./Employee";

//Extends: IS-A relationship
//Extends: Inheritance -> Design Concept + Reuse concept

export default class FTE extends Employee{
    constructor(salary: number){
        super(salary); //lệnh super() gọi đến "constructor" của class cha - tức là Employee
        this.name = "FTE"; //Override: ghi đè
    }
}

/**
 * 
 * GET POST PUT DELETE PATCH ---> Reuse
 * BaseRequestHandler | FP                  -----> class này bao gồm sends request, set header, set body
 * GETReqHandler extends BaseRequestHandler     ----> GETReqHandler muốn dùng lại 1 số hàm trong BaseRequestHandler => reuse
 * 
 */


