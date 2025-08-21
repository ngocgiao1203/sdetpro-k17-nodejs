let fooArray = [1, 12, 16, 28, 34];
let barArray = [1, 13, 16, 27, 99];

let mergedArray = [];

let fooPosition =0;
let barPosition = 0;
while(fooPosition < fooArray.length && barPosition < barArray.length){
    const fooValue = fooArray[fooPosition];
    const barValue = barArray[barPosition];

    if(fooValue <= barValue){
        mergedArray.push(fooValue);
        fooPosition++;
    }else{
        mergedArray.push(barValue);
        barPosition++;
    }
}

while(fooPosition < fooArray.length){
    mergedArray.push(fooArray[fooPosition]);
    fooPosition++;
}
while(barPosition < barArray.length){
    mergedArray.push(barArray[barPosition]);
    barPosition++;
}
console.log(mergedArray);



