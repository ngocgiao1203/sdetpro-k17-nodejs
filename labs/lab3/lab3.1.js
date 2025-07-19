//recommend tạo ra những function riêng để gọi cho gọn

//Count how many odd, even number(s) in an integer array

let intArr = [1, 2, 3, 4, 5];

// Even numders: 2
// Odd numbers: 3
let evenArray = [];
let oddArray = [];

let oddCount;
let evenCount;
function countOddEvenNumber(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            evenArray.push(array[i]);
        } else {
            oddArray.push(array[i]);
        }
    }
    return {
        oddCount: oddArray.length,
        evenCount: evenArray.length
    }
}

let result = countOddEvenNumber(intArr);
console.log(`Có tổng cộng ${result.oddCount} so le`);
console.log(`Có tổng cộng ${result.evenCount} so chan`);


