class Post{
    constructor(userId, id, title, body){
        this._userId = userId;
        this._id = id;
        this._title = title;
        this._body = body;
    }

    getUserId(){
        return this._userId;
    }
    getId(){
        return this._id;
    }
    getTitle(){
        return this._title;
    }
    getBody(){
        return this._body;
    }

    setUserId(userId){
        return this._userId = userId;
    }

    setId(id){
        return this._id = id;
    }
    setTitle(title){
        return this._title = title;
    }

    setBody(body){
        return this._body = body;
    }
}

module.exports = Post;