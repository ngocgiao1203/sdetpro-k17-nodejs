const readline = require("readline-sync");
// Creating 1 object representing Bank Count Number with below structure:
const bankAccount_1 = {
  accountNumber: 11111,
  routingNumber: "VCB", //mã định danh ngân hàng
  balance: 3000000,
};

const bankAccount_2 = JSON.parse(JSON.stringify(bankAccount_1));
bankAccount_2.accountNumber = 22222;

const { bankAccount, balanceAccount, moneyAfterWithdraw } = findAnAccount([
  bankAccount_1,
  bankAccount_2,
]);

console.log(`Bank account: ${bankAccount} - balance ${balanceAccount} - after withdrawing, your remaining balance is ${moneyAfterWithdraw}`);

//Controller
function findAnAccount(bankAccounts) {
  let inputAccBankNumber = Number(readline.question("Find bank account number: "));
  let findAccBankNumber = -1;
  let findAccBank_Balance = 0;
  let finalMoney = 0;

  for (const bankAccount of bankAccounts) {
    if (bankAccount.accountNumber === inputAccBankNumber) {
      findAccBankNumber = bankAccount.accountNumber;
      findAccBank_Balance = bankAccount.balance;
      finalMoney = updateBalance(findAccBank_Balance);
    }
  }
  if (findAccBankNumber === -1) {
    console.log(`Bank account is not existing`);
  }
  return {
    bankAccount: findAccBankNumber,
    balanceAccount: findAccBank_Balance,
    moneyAfterWithdraw: finalMoney,
  };
}
//allow user to withdraw the money and avoid user to take more than current balance

function updateBalance(balance) {
  let withdrawMoney = Number(readline.question("User wants to withdraw: "));
  if (withdrawMoney > balance) {
    console.log(`The amount you want to withdraw exceeds your current account balance.`);
    return balance;
  } else {
    return balance - withdrawMoney;
  }
}
