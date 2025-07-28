// Finding maximum value/minimum value from an integer array

let intArr = [11, 2, 33, 4, 5];

// Minimum: 1
// Maximum: 5

function findMinMax(array){
    let minNumber = array[0];
    let maxNumber = array[0];
    let minIndex = 0;
    let maxIndex = 0;
    for (let index = 0; index < array.length; index++) {
        if (minNumber > array[index]){
            minNumber = array[index];
            minIndex = index;
        }
        if (maxNumber < array[index]){
            maxNumber = array[index];
            maxIndex = index;
        }
    }
    return{
        min: minNumber,
        max: maxNumber,
        min_Index: minIndex,
        max_Index: maxIndex
    }
}

let result = findMinMax(intArr);
console.log(`Min la: ${result.min} - nam o vi tri ${result.min_Index}`);
console.log(`Max la: ${result.max} - nam o vi tri ${result.max_Index}`);
