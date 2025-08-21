//DO - WHILE: luôn cho người ta làm gì đó trước trước khi nó track điều kiện

//Send request to a server and just stop when response is 5xx

do{
    let userNumber = getUserNumber();
    if (userNumber === randomNumber){
        console.log(`Hooray!`);
        break;
    }
    guessingTime++;
}while(guessingTime < 3);