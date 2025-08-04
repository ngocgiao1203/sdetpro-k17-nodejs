let teo = {
    name: "Teo",
    age: 18,
    //nested object
    bankAccounts:{
        checking:{
            accountNumber: '123456789'
        },
        saving:{
            accountNumber: '987654321'
        }
    }
}
console.log(teo);

//Trying to clone data from teo object
// let tun = teo; //=: reference: quy chiếu tới vùng nhớ đó
// tun.name = "Tun";
// tun.age = 17;
// tun.bankAccounts.checking.accountNumber = '1234567891';
// tun.bankAccounts.saving.accountNumber = '9876543211';
// console.log(`======================================`);
// console.log(teo);
// console.log(tun);

//Shallow copy using spread synctax: nhân bản CẠN:
let tun = {...teo}; //...: express synctax: synctax của JS - copy tất cả những thông tin của teo qua tun
tun.name = "Tun";
tun.bankAccounts.checking.accountNumber = '1234567891'; //ko bảo vệ dc nested object
console.log(teo);
console.log(tun);

//Deeply copy - handle nested objects
let ti = JSON.parse(JSON.stringify(teo));
ti.name = "Ti";
ti.bankAccounts.checking.accountNumber = '12345678911'; //ko bảo vệ dc nested object
console.log(`======================================`);

console.log(teo);
console.log(ti);
console.log(tun);



