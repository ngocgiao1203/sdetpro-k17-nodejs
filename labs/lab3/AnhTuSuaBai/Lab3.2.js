//1. Tìm min, max
//2. chỉ ra index của các min, max
//3. Nếu min = max
// let array = [1, 1, 5, 1, 4, 5, 5, 1, 5];
let array = [1, 1, 1];

let currentMinValue = array[0];
let currentMaxValue = array[0];
let minValueIndexes = [0];
let maxValueIndexes = [0];

for (let index = 1; index < array.length; index++) {
  const currentValue = array[index];
  if (currentMinValue > currentValue) {
    currentMinValue = currentValue;
    minValueIndexes = [];
    minValueIndexes.push(index);
  } else if (currentMinValue === currentValue) {
    minValueIndexes.push(index);
  }
  if (currentMaxValue < currentValue) {
    currentMaxValue = currentValue;
    maxValueIndexes = [];
    maxValueIndexes.push(index);
  } else if (currentMaxValue === currentValue) {
    maxValueIndexes.push(index);
  }
}
if (currentMinValue === currentMaxValue) {
    console.log(`Array contains same value as ${currentMinValue}`);
    
} else {
  console.log(`Min value: ${currentMinValue} - minValueIndexes: ${minValueIndexes}`);
  console.log(`Max value: ${currentMaxValue} - maxValueIndexes: ${maxValueIndexes}`);
}
