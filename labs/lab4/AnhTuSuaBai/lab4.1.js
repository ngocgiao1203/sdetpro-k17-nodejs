const readline = require("readline-sync");

//Data - In memory DB - CRUD: dc dùng trong dữ liệu có cấu trúc
const teoAccount = {
    name:"Teo",
    accountNumber: '123456789',
    routingNumber: '112233',
    balance: 100000
};
const tiAccount = JSON.parse(JSON.stringify(teoAccount));
tiAccount.name = 'Ti';
tiAccount.accountNumber = '987654321';
tiAccount.balance = 500000;
const bankAccounts = [teoAccount, tiAccount];

//Usage: Provide data and call controllers to solve requirements
bankApp();

//controllers
function bankApp() {
    let isInteracting = true;
    let failedAttempts = 0;
    while(isInteracting && failedAttempts <3){
        printAppMenu();
        const userOption = getUserOption();

        switch (userOption) {
            case 1:
                const foundAccount = findAccount();
                printAccountInfo(foundAccount);
                break;
            case 2:
                updateBalance();
                break;
            case 0:
                isInteracting = false;
                break;
            default:
                failedAttempts++;
                console.log(`Wrong option! Attemp: ${failedAttempts}`);
        }
    }
    console.log(`See you again!`);  
}

//Support functions
function printAppMenu(){
    console.log(`
    === Banking application===
        1. Find an account
        2. Update balance
        0. Exit the program
    `);
    
}
function getUserOption(){}
function findAccount(){
    //Get user account number
    const inputAccountNumber = readline.question(`Please enter account number:`);
    //Loop over bank account data - if found account.accountNumber -> return bankAccount | null;
    for(const account of bankAccounts){
        if (account.accountNumber === inputAccountNumber){
            account;
            break;
        }
    }
    return null;
}
function printAccountInfo(account){
    //if account === null -> account is not existing!
    //Else -> {name, balance} = account -> print out
    if (account){
        const{name, balance} = account; //Kỹ thuật destructure
        console.log(`Account information | name: ${name} | balance: ${balance}`);
    }else{
        console.log(`Account is not existing`);
    }
}
function updateBalance(){
    /**
     * Get account info using findAccount function
     * do{
     * log(`Stating withdraw process...`)
     * if (foundAccount)
     *  get the current balance
     *  Ask user about withdraw amount
     *      if withDrawAmount > currentBalance
     *          log a warning
     *          updateBalanceAttempt++;
     *      else
     *          update balance: foundAccount.balance = (currentBalance - withDrawAmount)
     *          log a succeed msg
     * else
     *      accountAttempt++
     *      log a warning about account not existing
     * } while(updateBalanceAttempt < MAX_ALLOWED_ATTEMPT && accountAttempt < MAX_ALLOWED_ATTEMPT)
     */

    const foundAccount = findAccount();
    if (foundAccount){
        const { balance } =foundAccount;
        console.log(`This is your current balance: ${balance}`);
        const withDrawAmount = Number(readline.question("How much do you wanna withdraw:"));
        if(withDrawAmount <= balance){
            foundAccount.balance = balance - withDrawAmount;
            console.log(`Withdraw succeed!`);
        }else{
            console.log(`Insufficient balance!`);
            
        }
    }else{
        console.log(`Account is not existing!`);
        
    }
}