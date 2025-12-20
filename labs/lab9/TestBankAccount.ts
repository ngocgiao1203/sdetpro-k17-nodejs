import CheckingAcount from "./CheckingAccount";
import SavingAccount from "./SavingAccount";

let savingAccount = new SavingAccount();
let checkingAccount = new CheckingAcount();

//deposit
savingAccount.deposit(100);
checkingAccount.deposit(100);

//Get balance
console.log(`Saving account balance: ${savingAccount.getBalance()}`);
console.log(`Checking account balance: ${checkingAccount.getBalance()}`);

//withDraw positive case
savingAccount.withDraw(100);
checkingAccount.withDraw(50);
//withDraw negative case
savingAccount.deposit(1);
savingAccount.withDraw(1);

