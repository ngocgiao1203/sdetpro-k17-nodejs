let array = [1, 2,3, 4,5];
//MAP - ánh xạ

let doubleValueArray = array.map(doubleValue);

function doubleValue(value,index, array){
    return value *2;
}
console.log(`Original array: ${array}`);
console.log(`Double value array: ${doubleValueArray}`);
console.log(`--------------------------------------------------`);



//SORT - string
let strings = ['B', 'C', 'A'];
strings.sort();
console.log(`After sorted: ${strings}`);
strings.reverse();
console.log(`After reversed: ${strings}`);
console.log(`--------------------------------------------------`);


//callBackFn: khi nào cần thì gọi ra
//SORT - number
let numbers = [100, 19, 22];
numbers.sort();
console.log(`Numbers after sorted with default methods: ${numbers}`);
numbers.sort(sortNumberASC);
console.log(`Numbers after sorted with custom rule - ASC: ${numbers}`);
numbers.sort(sortNumberDESC);
console.log(`Numbers after sorted with custom rule - DESC: ${numbers}`);


function sortNumberASC(num1, num2){
    return num1 - num2;
}

function sortNumberDESC(num1, num2){
    return num2 - num1;
}
console.log(`--------------------------------------------------`);


//MIXED contents
let mixContents = ['a','A','1'];