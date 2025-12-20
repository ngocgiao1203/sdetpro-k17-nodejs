export default class Person{
    
    private name: string = "";
    private age: number = 0;

    constructor (name: string, age: number){
        this.validateAge(age);
        this.name = name;
        this.age = age;
    }

    //Service method
    public setAge(age: number){
        this.validateAge(age);
        this.age = age;
    }
    //Support method | DRY
    private validateAge(age:number){
        if (age < 0){
            throw new Error(`Age can't be less than zero`)
        }
    }
}

/**
 * ACCESS Modifiers
 * - Default(nothing) / public: everywhere
 * - protected: Sub-classes
 * - privated: ONLY on the class
 */