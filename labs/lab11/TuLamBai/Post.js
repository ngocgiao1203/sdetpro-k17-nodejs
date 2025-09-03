// This class represents a Post data model.
// It acts as a blueprint for creating post objects.
// The constructor takes a post object and assigns its properties.
class Post {
    constructor(post) {
        this.userId = post.userId;
        this.id = post.id;
        this.title = post.title;
        this.body = post.body;
    }
}

// Export the Post class so it can be used in other files.
module.exports = Post;
