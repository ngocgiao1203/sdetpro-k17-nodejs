const array = [1, 2, 3, 4, 5];

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}

//FOR..OF: chỉ để lấy giá trị của vòng for
for (let value of array){ //lấy ra gtri của từng phần tử trong array - ko cần quan tâm tới index của array đó
    console.log(value);
    
}

//FOR..IN: cần truy cập vào index, nhưng ko lấy value cho vòng FOR
// for (const index in object) {
//     console.log(index);
    
// }

//forEach: nhận vào 1 callBackFn
const automationUserList =[];
array.forEach(customLogic);
function customLogic(value, index, array){
    automationUserList.push(`automationUser_${value}@mydomain.com`);
}
console.log(automationUserList);
