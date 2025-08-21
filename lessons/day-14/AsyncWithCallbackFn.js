const targetURL = "https://sdetpro.com";

//Callback hell 
sendRequest(targetURL, function (response){
    processResponse(response, function (statusCode){
        console.log(`Status code là : ${statusCode}`);
        validateResponse(statusCode);
    })
})

//Asynchronous
function sendRequest(url, callback) {
    console.log(`1.Sending request to url: ${url}`);
    setTimeout(function (){ //setTimeout: là 1 Asynchronous do người khác viết
        callback({status: 200}); //function này dc dùng để gọi lại "callback" do người ta đưa vô (dòg 10)
        //và trả về "callback" function đó 1 object chỉ có 1 property là "status"
    }, 1*1000);

}


//Asynchronous
function processResponse(response, callback) {//callback: anh muốn làm gì sau khi tôi đã giải quyết xong
    console.log(`2. Processing response...`);
    setTimeout (function () {
        callback (response.status); //lấy ra status trong respone
    }, 3 *1000);    
}

//Synchronous
function validateResponse(statusCode) {
    console.log(`3. Validating response...`);
    if (statusCode === 200){
        console.log("Passed");
    }else{
        console.error("Failed");
    }       
}

//1. Callback -> callback hell: nested callback
//2. Promise + thenable chain
//3. Async/ Await