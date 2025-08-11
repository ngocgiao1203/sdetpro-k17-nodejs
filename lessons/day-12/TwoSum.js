/**
 * input: [3, 7, 22, 1], target number: 8
 * Output: [index1, index2] | []
 * Outer loop: outerIndex
 *  firstnum
 * findingNumber = targetNumber = firstnum
 *      inner Loop
 *          OuterIndex+1
 *              if currentNumber ===findingNumber
 *              return [outerIndex, innerIndex]
 * 
 * return []
*/

// const givenArray = [3, 7, 22, 1];
// const targetNumber = 8;

// let indices = findIndecsBruteForce(givenArray, targetNumber);
// console.log(indices);

// //Brute Force | Time complexity: 0(n^2)
// function findIndecsBruteForce(giveArray, targetNumber) {
//     for(let firstNumIndex = 0; firstNumIndex < giveArray.length - 1; firstNumIndex++){
//         const firstNum = givenArray[firstNumIndex];
//         let lookingNumber = targetNumber - firstNum
//         for(let sencondNumIndex = firstNumIndex +1; sencondNumIndex < giveArray.length; sencondNumIndex++){
//             const secondNumber = givenArray[sencondNumIndex];
//             if(secondNumber === lookingNumber){
//                 return[firstNumIndex, sencondNumIndex]
//             }
//         }
// return []
//     }
    
// }



//Time complexity: O(n)
const givenArray = [3, 7, 22, 1];
const targetNumber = 8;
let findIndices = findIndicesMap(givenArray, targetNumber);
console.log(findIndices);

function findIndicesMap(givenArray, targetNumber){
    let numMap = new Map();
    for (let firstNumIndex = 0; firstNumIndex < givenArray.length; firstNumIndex++){
        const firstNum = givenArray[firstNumIndex];
        const lookingNumber = targetNumber - firstNum;

        if(numMap.has(lookingNumber)){  //key? 5
            return [numMap.get(lookingNumber), firstNumIndex];
        }
        numMap.set(firstNum, firstNumIndex); 
        //[
        //[3,0]
        //[7, 1]
        //
    }
    
    return [];
}

