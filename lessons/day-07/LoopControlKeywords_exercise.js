let array = [1,2,3,4,3];

const TARGET_NUMBER = 3;
let foundIndexes = []

for(let index = 0; index < array.length; index++){
    const value = array[index];
    if(value === TARGET_NUMBER){
        foundIndexes.push(index);
    }
}
if(foundIndexes.length === 0){
    console.log(`The ${TARGET_NUMBER} not found`);
    
}else{
    console.log(`These are found index(es) for the ${TARGET_NUMBER}: ${foundIndexes}`);
}
 