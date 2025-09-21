const Post = require("./Post");


class RequestHandler{
    constructor (baseUrl){
        this._baseUrl = baseUrl;
    }

    async getTargetPost(targetUserId, postId) {
        const targetUserPosts = await this._getAllPosts(targetUserId);
        const targetPost = targetUserPosts.find(function(post){
            return post.id === postId;
        })

        if(!targetPost){
            console.log(`The post id: ${postId} for user ${targetUserId} is not existing!`);
            return undefined;
        }

        const {userId, id, title, body} = targetPost; //bắt đầu phân rã data bên trong 1 object "post"
        return new Post(userId, id, title, body);
    }


    async getAllPosts(targetUserId) {
        let allPosts = [];
        //1. Get all posts for the user
        const targetUserPosts = await this._getAllPosts(targetUserId);

        //2. Construct an array of Post (Ánh xạ - map)
        for (const post of targetUserPosts) {
            const{userId, id, title, body} = post; //bắt đầu phân rã data bên trong 1 object "post"
            // const returnedAllPost = new Post(userId, id, title, body); //từ data của response (dòng 21) sang 1 post model
            allPosts.push(new Post(userId, id, title, body));
        }
        return allPosts;
    }

    async _getAllPosts(userId) {
        const postEndpoint = `${this._baseUrl}/posts`;
        const response = await fetch(postEndpoint);
        const allPosts = await response.json();
        return allPosts.filter(function(post){
            return post.userId === userId;
        })
    }
}
module.exports = RequestHandler;
