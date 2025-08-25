main()

function main() {
    const promise = pro1(1)
    
    promise.then(function(a){
        console.log("message from resolve", a)
        return "hallooo"
    }).then(function(b) {
        console.log(b)
    })
    
    promise.catch(function(b) {
        console.log("message from reject", b)
    })
}

function pro1(option){
    const myPromise =  new Promise (function(resolve, reject){
        setTimeout(function() {

            if(option == 1) {
                const printText = "hello1";
                resolve(printText)
            } else {
                reject("Rejected")
            }
        }, 1000);
    }) 
    //=> new Promise: là instanace
    //=> then: là method của instance (new Promise)

    return myPromise;
}

function pro2(){
    return new Promise (function(resolve, reject){
        setTimeout(function() {
            const printText = "hello2";
            resolve(printText);   
            console.log(printText);      
        }, 1000);
    })
}