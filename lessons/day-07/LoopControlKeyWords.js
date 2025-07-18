let array = [1, 2, 3, 4, 5];

const TARGET_NUMBER = 3;
// for (let index = 0; index < array.length; index++) {
//         const value = array[index];
//         if (value === TARGET_NUMBER) {
//             console.log(`Found ${TARGET_NUMBER} at index ${index}`);
//             break; //dc dùng để thoát ra ngoài vòng lặp - terminate the loop khi vòng lặp đạt dc điều kiện gì của DEVs
//         }
//         console.log(value);

//     }

let foundIndex = findIndex(array, TARGET_NUMBER);
if(foundIndex <0){
    console.log(`${TARGET_NUMBER} not found`);
    
}else{
        console.log(`${TARGET_NUMBER} found at index ${foundIndex}`);

        //BREAK là dùng trong 1 vòng lặp - to terminate a loop regardless the rest values
        //RETURN dùng trong ngữ cảnh của 1 function

}

//where break will be ended up
//* 
// @param{*} array
// @param{*} targetNumber
// @returns a value as index, -1 if not found
// 
// */

function findIndex(array, targetNumber) {
    for (let index = 0; index < array.length; index++) {
        const value = array[index];
        if (value === TARGET_NUMBER) {
            return index; //dừng lại tất cả những phần còn lại trong hàm và trả ra giá trị đã kiếm ra dc trong hàm
                            //RETURN dùng trong ngữ cảnh của 1 function
                            //1 hàm có thể có kết quả trả về/ ko trả về tùy mình
        }
        console.log(value);

    }
    return -1;
}