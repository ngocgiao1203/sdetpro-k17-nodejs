import BankAccount from "./BankAccount";

export default class CheckingAcount extends BankAccount{

    constructor(){
        super();
        this.minimumBalance = 50;
    }
    deposit(amount: number): void {
        this.balance += amount;
    }
    withDraw(amount: number): void {
        const errMsg = `Checking account must have minimum balance as ${this.minimumBalance}`;
        this.balance = this.balance - amount;
    }
    
    
}