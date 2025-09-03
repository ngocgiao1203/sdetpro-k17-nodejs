class Person {

    constructor(firstName, lastName, age){
        this._age = age;
        this._lastName = lastName
        this._firstName = firstName

    }

    getFullName(){
        return this._firstName + " " + this._lastName;
    }

    getAge(){
        return this._age;
    }

    setLastname(lastName) {
        this._lastName = lastName
    }

    setFirstName(firstName){
        this._firstName = firstName
    }

}
module.exports = Person; 


let teo = new Person("Teo", "Nguyen", 18);  //teo là 1 instance của Person (class)
// this._name = "Tèo"
// //this._age = 18


teo._lastName + teo._firstName

function hello(message) {
    console.log(message)
    const name = "giao"
    return message;
}

hello("hello")



// Post.js
class Post {
    constructor(id, name) {
        this.id = id
        this.name = name
    }
}

// RequestHandler.js
class RequestHandler {

    async _getAllPosts(userId) {
        // fetch data to get post by user id
        // const postArray: Post[] = []
        // response data from posts =>  postArray = responseData
        // return postArray
    }
}
