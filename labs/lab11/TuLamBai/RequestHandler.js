// Import the Post model to create instances of Post objects.
const Post = require('./Post');

// Define the base URL and API endpoints.
const BASE_URL = "https://jsonplaceholder.typicode.com";
const USER_ENDPOINT = `${BASE_URL}/users`;
const POST_ENDPOINT = `${BASE_URL}/posts`;

// This class acts as the controller, handling all the logic for fetching and processing data.
class RequestHandler {
    // Fetches and returns a single post for a specific user.
    async printTargetPost(userId, postId) {
        // Fetch all posts for the user and check if the user exists.
        const returnedData = await this._getAllPostForUser(userId);

        if (returnedData.hasUser) {
            // Find the specific post by its ID.
            const returnedPostContent = returnedData.returnedPostsForUser.filter(post => {
                return post.id === postId;
            });
            // Construct a new Post data model from the found data.
            const postModel = returnedPostContent.length > 0 ? new Post(returnedPostContent[0]) : null;
            return postModel;
        }
        return null;
    }

    // Fetches and returns all posts for a specific user.
    async printAllPosts(userId) {
        // Fetch all posts for the user and check if the user exists.
        const returnedAllPost = await this._getAllPostForUser(userId);
        if (returnedAllPost.hasUser) {
            // Map the returned posts to an array of Post data models.
            return returnedAllPost.returnedPostsForUser.map(post => new Post(post));
        }
        return [];
    }

    // A private helper method to fetch all posts for a given userId.
    async _getAllPostForUser(userId) {
        // Use a try-catch block for robust error handling.
        try {
            const userResponse = await fetch(`${USER_ENDPOINT}/${userId}`);
            // If the user does not exist, throw an error.
            if (!userResponse.ok) {
                console.log(`User ID ${userId} does not exist.`);
                return { hasUser: false };
            }

            const postResponse = await fetch(POST_ENDPOINT);
            const response = await postResponse.json();

            // Filter the posts to find ones matching the userId.
            const returnedPostsForUser = response.filter(post => post.userId === userId);

            return {
                hasUser: true,
                returnedPostsForUser: returnedPostsForUser
            };
        } catch (error) {
            console.error('An error occurred while fetching data:', error);
            return { hasUser: false };
        }
    }
}

// Export the RequestHandler class.
module.exports = RequestHandler;
