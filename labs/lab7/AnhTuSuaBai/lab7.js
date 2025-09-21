const RequestHandler = require("./RequestHandler");

//data
const BASE_URL = "https://jsonplaceholder.typicode.com";
const userId = 1;
const postId = 1;

//Execute Main Function
lab7();

async function lab7() {
    //Construct objects (models, controllers)
    const reqHandler = new RequestHandler(BASE_URL);

    //Usage using Function Programming
    const post = await reqHandler.getTargetPost(userId, postId);
    const allPost = await reqHandler.getAllPosts(userId);

    //log
    console.log(post);
}
