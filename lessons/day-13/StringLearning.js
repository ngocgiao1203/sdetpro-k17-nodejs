//STRING IS IMMUTABLE
let myString = `     Hello, day la dau nhay kep: \`,          `;
console.log(myString);


//Length
const strLength = myString.length;
console.log(strLength);

//Get a character at a position
for(let index = 0; index < strLength; index++){
    //console.log(myString.charAt(index));
}


//Get rid of spaces at beginning and end of string
console.log(myString.trim());
console.log(strLength);

//Replace
//tmoi mnay gmap mnmhau 7h <---- encoded
//Key: em phai hi sinh
//toi nay gap nhau 7h <------decoded

let encodedStr = "tmoi mnay gmap MnMhau 7h";
let decodedStr = encodedStr.replaceAll("m","")
console.log(decodedStr);
console.log(encodedStr);

//Cách 2. Replace bằng Regex  - Regular Expression
console.log(encodedStr.replace(/m/gi,""));

/**
    Preparation: 30mins
    Cooking: 120mins
    Total: 150mins
 */


    let totalCookingTimeFromUI = "Toal: 150mins";
    let totalCookingTimeStr = totalCookingTimeFromUI.replace(/[^0-9]/gim,""); 
    console.log(Number(totalCookingTimeStr));
        //cho tất cả các trường hợp mà ở đó ko phải là từ 0 -> 9
    // []: cho tất cả những trường hợp
    // ^: nghĩa là "không phải là"

    //gim: global - insensitive - multiple lines
    
    console.log(`Received Number: ${returnNumberOne()}`);
    function returnNumberOne() {
        return 1;
    }

    //Concatenation
    let str1 = "Hello";
    let str2 = ", my name is Teo!";
    let finalStr = str1.concat(str2).concat(" What is your name?"); //Cách 1
    let finalStr1 = (str1+str2).concat(" What is your name?"); //Cách 2
    console.log(finalStr);
    console.log(finalStr1);
    

    //Sub-string: substring
    let strToBeCut = "https:// sdetpro.com";
    //Chỉ muốn lấy "http" ở đầu
    let startIndex = 0; //startIndex: dgl "Inclusive": bao gồm
    let endIndex = 5; //endIndex: dgl "Exclusive": loại ra
    let subStr = strToBeCut.substring(startIndex, endIndex);
    console.log(subStr);
    

    //Split: cắt chuỗi
    //Vd: cắt dựa vô dấu ":"
    console.log(strToBeCut.split(":"));
        console.log(strToBeCut.split("")); //cắt ra thành từng ký tự bao gồm cả khoảng trắng


let obj = {};
console.log(obj.name);

if(!obj.name){
    console.log(`myName is not existing`);
}
console.log(obj.hasOwnProperty("myName"));

