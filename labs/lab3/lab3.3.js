//Sort an integer array from min to max

// Input: [12, 34, 1, 16, 28]
// Expected output: [1, 12, 16, 28, 34]

let intArr = [12, 34, 1, 16, 28];

function sortMinToMax(array) {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - 1 - i; j++) {
            let temp = array[j];
            if (array[j] > array[j + 1]) {
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}
let result = sortMinToMax(intArr);
console.log(result);
