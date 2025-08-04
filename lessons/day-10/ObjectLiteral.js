let teoName = "Teo"
let teoAge = 21;
let teoGender = "M";

//3 vùng nhớ này lưu 3 đặc điểm của Tèo

//Office stuff -> Box (Office stuff): Pen, notebook, eraser
//CREATE an object - literal
let teoInfo = {
    name : "Teo", //Name: dgl "Property" / key
                    //"Teo": value
    tuoi : 21,
    "my gender": "M"
}

//Read | Do notation to get value from a Property
console.log(`Teo's name: ${teoInfo.name}`);
console.log(`Teo's gender: ${teoInfo["my gender"]}`);

//Destructure
const{age, name, ["my gender"]: gender} = teoInfo; //{} -> Muốn phân rã, lấy ra 1 phần nào đấy
console.log(`Teo's name: ${name}`);
console.log(`Teo's gender: ${gender}`);

//UPDATE
teoInfo.age = 22;
console.log(teoInfo);


//delete
delete teoInfo["my gender"];
teoInfo.gender = 'M';
console.log(teoInfo);
