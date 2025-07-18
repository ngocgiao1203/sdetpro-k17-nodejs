let array = [1,2,3,4,5];
const TARGET_NUMBER = 3;

for(let index = 0; index < array.length; index++){
    const value = array[index];
    if(value === TARGET_NUMBER){
        continue;
    }
    else{
        console.log(`Hello bạn ${value}`);
        
    }
}

//SKIP an iteration
//BREAK: TERMINATE the rest WHOLE loop