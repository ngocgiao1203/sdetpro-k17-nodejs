class Person {

    constructor(name, age){
        //constructor: là người thợ
        //để xét dc thuộc tính (property) đó -> dùng this.
        this._name = name;
        this._age = age;
    }

    //1 hàm bên trong 1 class - ko dùng từ "Method"
    //Getters: is a function that return the CURRENT value of a property
    getName(){
        return this._name;
    }
    //Setters: reassign a property's value
    setName(name){
        this._name = name;
    }

}
module.exports = Person; //xuất khẩu class

//teo is an object that was created from Person Class Template
let teo = new Person("Teo", 18); //teo là 1 instance của Person (class)
//Vay mượn từ khóa new. Khi gọi new, là đang gọi constructor trong class Person 
//Tạo ra 1 new person tên Tèo

//Break Encapsulation | Violation
console.log(teo.getName());
teo.setName("Teo dep trai")
// teo.setName("Teo Dep Trai");
console.log(teo.getName());



