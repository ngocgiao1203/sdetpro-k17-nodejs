//data

const RequestHandler = require("./RequestHandler");


lab7();

async function lab7(){
    const reqHandler = new RequestHandler("https://jsonplaceholder.typicode.com");
    // Given params
    const userId = 1;
    const postId = 1;

    const post = await reqHandler.getTargetPost(userId, postId);
    const allPost = await reqHandler.getAllPosts(userId);

    console.log(post);
    console.log(allPost);
}