```js
//Data
userId = 1;
postId = 1;

//Construct objects (Model, Controller)
const reqHandler = new RequestHandler(BASE_URL);

//Functional Programming
const post = await printTargetPost(userId, postId);
const allPost = await printAllPosts(userId);