//có thể in ra giá trị min, max nằm ở vị trí nào
// Finding maximum value/minimum value from an integer array

// let intArr = [1, 2, 3, 4, 5];
let intArr = [11, 2, 3, 4, 5];

// Minimum: 1
// Maximum: 5

function checkMinMaxNumber(array) {
    let minNumber = array[0];
    let maxNumber = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < minNumber) {
            minNumber = array[i];
        } 
        if (array[i] > maxNumber) {
            maxNumber = array[i];
        } 
    }
    return {
        min: minNumber,
        max: maxNumber
    }
}

let result = checkMinNumber(intArr)

console.log(`Check min number ${result.min}`);
console.log(`Check max number ${result.max}`);



