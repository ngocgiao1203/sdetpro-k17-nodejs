class Person{

    constructor(name, age){
        if(age <=0){
            throw new Error('Age can\'t be less than zero');
        }
        this._name = name;
        this._age = age;
    }

    //Getters: is a function that return the CURRENT value of a property
    get name(){
        return this._name;
    }
    get age(){
        return this._age;
    }

    set name(name){
        this._name = name;
    }

}

module.exports = Person;