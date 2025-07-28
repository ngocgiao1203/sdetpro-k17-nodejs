//Merge 2 SORTED integer array into one SORTED array

let arr1 = [1, 12, 16, 28, 34];
let arr2 = [1, 13, 16, 27, 99];

let arr3 = arr1.concat(arr2)

function sortMinToMax(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }

        }
    }
    return array;
}
console.log(sortMinToMax(arr3));





