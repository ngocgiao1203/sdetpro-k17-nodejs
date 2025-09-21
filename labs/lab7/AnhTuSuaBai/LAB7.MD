```js

//Data
userId = 1;
postId = 1;

//Construct objects (Models, Controllers)
const reqHandler = new RequestHandler(BASE_URL); //hướng hàm
    /* 
        reqHandler: là 1 object dc tạo ra từ class "RequestHandler" thông qua constructor của nó
        &&
        constructor này nhận vô 1 đối số là "BASE_URL" để nó construct cái object đó
    */

//Functional Programming
const post = await printTargetPost(userId, postId);
const allPost = await printAllPosts(userId);


